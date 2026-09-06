import { NextRequest, NextResponse } from 'next/server'
import { getAdminDb } from '../../../lib/firebase-admin'
import { FieldValue } from 'firebase-admin/firestore'

// Escritura de reseñas del formulario de /contacto.
// Vive en el servidor para que las reglas de Firestore puedan quedar cerradas.
export const runtime = 'nodejs'

const MAX_COMENTARIO = 300

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Honeypot: si viene relleno es un bot. Respondemos ok para no darle señal.
    if (data.website) {
      return NextResponse.json({ ok: true })
    }

    const calificacion = Number(data.calificacion)
    if (!Number.isInteger(calificacion) || calificacion < 1 || calificacion > 5) {
      return NextResponse.json(
        { ok: false, error: 'Calificación inválida' },
        { status: 400 }
      )
    }

    const nombre = String(data.nombre ?? '').trim()
    if (!nombre) {
      return NextResponse.json(
        { ok: false, error: 'El nombre es obligatorio' },
        { status: 400 }
      )
    }

    const comentario = String(data.comentario ?? '').trim()
    if (comentario.length > MAX_COMENTARIO) {
      return NextResponse.json(
        { ok: false, error: `El comentario supera ${MAX_COMENTARIO} caracteres` },
        { status: 400 }
      )
    }

    // Lista blanca de campos: nada que mande el cliente fuera de esto se guarda.
    await getAdminDb().collection('reseñas').add({
      nombre: nombre.slice(0, 120),
      correo: String(data.correo ?? '').trim().slice(0, 200),
      comentario,
      calificacion,
      fecha: FieldValue.serverTimestamp(),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error al guardar reseña:', error)
    return NextResponse.json(
      { ok: false, error: 'No se pudo guardar la reseña' },
      { status: 500 }
    )
  }
}
