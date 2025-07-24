import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { db } from '../../../lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export async function POST(req: NextRequest) {
  const data = await req.json()

  const recaptchaToken = data.captchaToken
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY

  if (!recaptchaToken || !recaptchaSecret) {
    return NextResponse.json({ ok: false, error: 'Falta token de reCAPTCHA' }, { status: 400 })
  }

  try {
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
    })

    const verification = await verifyRes.json()

    if (!verification.success) {
      return NextResponse.json(
        { ok: false, error: 'reCAPTCHA no válido', details: verification },
        { status: 403 }
      )
    }
  } catch (error) {
    console.error('Error al verificar reCAPTCHA:', error)
    return NextResponse.json({ ok: false, error: 'Error al validar reCAPTCHA' }, { status: 500 })
  }

  const now = new Date()
  const fechaHora = now.toLocaleString('es-CL', {
    timeZone: 'America/Santiago',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: '"Cotizador Web" <ventas@partsmr.com>',
    to: 'ventas@partsmr.com',
    subject: 'Nueva solicitud de cotización',
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
        <h2 style="color: #f97316; margin-bottom: 12px;">Nueva Solicitud de Cotización</h2>
        <ul style="padding-left: 16px; margin: 0 0 16px 0;">
          <li><b>Nombre:</b> ${data.nombre} ${data.apellido}</li>
          <li><b>Correo:</b> ${data.correo}</li>
          <li><b>Teléfono:</b> ${data.telefono}</li>
          <li><b>País:</b> ${data.pais}</li>
          <li><b>Tipo:</b> ${data.tipo}</li>
          <li><b>Marca:</b> ${data.marca}</li>
          <li><b>Modelo:</b> ${data.modelo}</li>
          ${data.año ? `<li><b>Año:</b> ${data.año}</li>` : ''}
          ${data.chasis ? `<li><b>Chasis:</b> ${data.chasis}</li>` : ''}
          ${data.tipoRepuesto ? `<li><b>Tipo Repuesto:</b> ${data.tipoRepuesto}</li>` : ''}
        </ul>
        <p><b>Mensaje:</b><br/>${data.mensaje}</p>
        <hr style="margin: 24px 0;" />
        <p><b>Fecha y hora de envío:</b> ${fechaHora}</p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)

    const { captchaToken, ...dataSinToken } = data
    await addDoc(collection(db, 'cotizaciones'), {
      ...dataSinToken,
      fechaHora,
      timestamp: serverTimestamp(),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error al enviar el correo o guardar en Firestore:', error)
    return NextResponse.json({ ok: false, error }, { status: 500 })
  }
}
