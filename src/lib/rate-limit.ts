// src/lib/rate-limit.ts
// Limitador de peticiones por IP para las API routes de formularios.
//
// ALCANCE, para que no se espere de esto mas de lo que hace:
// el contador vive en la memoria del proceso. En serverless cada instancia
// tiene la suya, asi que el limite es por instancia y no global, y se reinicia
// en cada arranque en frio. Frena las rafagas de un bot que golpea el mismo
// endpoint, que es el caso real de spam de formularios; no sirve como defensa
// ante un ataque distribuido. Si algun dia hace falta un limite exacto y
// compartido, hay que moverlo a un almacen externo (Vercel KV / Upstash).

type Registro = { conteo: number; expira: number }

const memoria = new Map<string, Registro>()

// Sin esto el Map creceria indefinidamente con IPs que no vuelven.
function limpiarVencidos(ahora: number) {
  for (const [clave, reg] of memoria) {
    if (reg.expira <= ahora) memoria.delete(clave)
  }
}

export type ResultadoLimite = {
  permitido: boolean
  restantes: number
  reintentarEn: number // segundos
}

export function verificarLimite(
  identificador: string,
  maximo = 5,
  ventanaMs = 10 * 60 * 1000
): ResultadoLimite {
  const ahora = Date.now()

  // Barrido barato: solo de vez en cuando, no en cada peticion.
  if (memoria.size > 500) limpiarVencidos(ahora)

  const actual = memoria.get(identificador)

  if (!actual || actual.expira <= ahora) {
    memoria.set(identificador, { conteo: 1, expira: ahora + ventanaMs })
    return { permitido: true, restantes: maximo - 1, reintentarEn: 0 }
  }

  actual.conteo += 1

  if (actual.conteo > maximo) {
    return {
      permitido: false,
      restantes: 0,
      reintentarEn: Math.ceil((actual.expira - ahora) / 1000),
    }
  }

  return {
    permitido: true,
    restantes: maximo - actual.conteo,
    reintentarEn: 0,
  }
}

// Detras de un proxy (Vercel) la IP del cliente llega en cabeceras, no en el socket.
export function obtenerIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return req.headers.get('x-real-ip') ?? 'desconocida'
}
