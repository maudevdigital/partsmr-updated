// src/lib/firebase-admin.ts
// SDK de Firebase para el SERVIDOR. A diferencia del SDK cliente (src/lib/firebase.ts),
// este ignora las reglas de Firestore por diseño: se autentica con una cuenta de
// servicio. Por eso las reglas pueden quedar completamente cerradas (read/write: false)
// y las escrituras legítimas siguen funcionando desde las API routes.
//
// NUNCA importar este archivo desde un componente con 'use client'.
import { initializeApp, getApps, getApp, cert, App } from 'firebase-admin/app'
import { getFirestore, Firestore } from 'firebase-admin/firestore'

function buildCredential() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY

  if (!raw) {
    throw new Error(
      'Falta FIREBASE_SERVICE_ACCOUNT_KEY. Genera una clave de cuenta de servicio en ' +
        'Consola de Firebase > Configuracion del proyecto > Cuentas de servicio > ' +
        'Generar nueva clave privada, y pega el JSON completo en esa variable de entorno.'
    )
  }

  let parsed: Record<string, string>
  try {
    // Acepta el JSON tal cual, o codificado en base64 (util para evitar
    // problemas con saltos de linea al pegarlo en paneles como Vercel).
    const json = raw.trim().startsWith('{')
      ? raw
      : Buffer.from(raw, 'base64').toString('utf8')
    parsed = JSON.parse(json)
  } catch {
    throw new Error(
      'FIREBASE_SERVICE_ACCOUNT_KEY no es JSON valido ni base64 de un JSON valido.'
    )
  }

  // Al pegar el JSON en un panel web, los \n de la clave privada suelen quedar
  // escapados como texto literal. Hay que devolverlos a saltos de linea reales.
  const privateKey = (parsed.private_key || '').replace(/\n/g, '\n')

  return cert({
    projectId: parsed.project_id,
    clientEmail: parsed.client_email,
    privateKey,
  })
}

// Inicializacion perezosa: a proposito NO se ejecuta al importar el modulo.
// Si se inicializara arriba, un build sin la variable de entorno definida
// fallaria al compilar en vez de fallar solo en la peticion que la necesita.
let cached: Firestore | null = null

export function getAdminDb(): Firestore {
  if (cached) return cached

  const app: App = getApps().length
    ? getApp()
    : initializeApp({ credential: buildCredential() })

  cached = getFirestore(app)
  return cached
}
