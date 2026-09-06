import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getAdminDb } from '../../../lib/firebase-admin'
import { FieldValue } from 'firebase-admin/firestore'

export async function POST(req: NextRequest) {
  const data = await req.json()

  // Honeypot validation - if 'website' field is filled, it's a bot
  if (data.website) {
    console.log('Bot detected via honeypot field')
    // Return success to not alert the bot
    return NextResponse.json({ ok: true })
  }

  // Basic rate limiting could be added here (check IP, timestamp, etc.)

  // Formateo de fecha/hora
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

  // Preparar transporte de correo
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  // Preparar contenido del correo
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
          ${data.chasis ? `<li><b>Chasis o Patente:</b> ${data.chasis}</li>` : ''}
          ${data.tipoRepuesto ? `<li><b>Tipo Repuesto:</b> ${data.tipoRepuesto}</li>` : ''}
        </ul>
        <p><b>Mensaje:</b><br/>${(data.mensaje || '').replace(/\n/g, '<br/>')}</p>
        <hr style="margin: 24px 0;" />
        <p><b>Fecha y hora de envío:</b> ${fechaHora}</p>
      </div>
    `,
  }

  // El correo es lo que realmente entrega el lead: si falla, es un error de verdad.
  try {
    await transporter.sendMail(mailOptions)
  } catch (error) {
    console.error('Error al enviar el correo de cotizacion:', error)
    return NextResponse.json(
      { ok: false, error: 'Error al enviar correo' },
      { status: 500 }
    )
  }

  // El guardado en Firestore es un respaldo. Si falla, el lead ya llego por correo,
  // asi que se registra el error pero NO se le devuelve un fallo al cliente: antes
  // esto provocaba que el usuario viera "error" y reenviara el formulario duplicado.
  try {
    const { website, ...cleanData } = data

    await getAdminDb().collection('cotizaciones').add({
      ...cleanData,
      fechaHora,
      timestamp: FieldValue.serverTimestamp(),
    })
  } catch (error) {
    console.error('Correo enviado, pero fallo el guardado en Firestore:', error)
  }

  return NextResponse.json({ ok: true })
}
