import type { MetadataRoute } from 'next'

const BASE = 'https://www.partsmr.com'

// Next sirve esto como /sitemap.xml. Sin sitemap, Google depende de encontrar
// las paginas siguiendo enlaces, lo que retrasa la indexacion de rutas nuevas.
export default function sitemap(): MetadataRoute.Sitemap {
  const rutas: { ruta: string; prioridad: number; frecuencia: 'weekly' | 'monthly' }[] = [
    { ruta: '', prioridad: 1.0, frecuencia: 'weekly' },
    { ruta: '/repuestos', prioridad: 0.9, frecuencia: 'weekly' },
    { ruta: '/repuestos/maquinaria', prioridad: 0.9, frecuencia: 'weekly' },
    { ruta: '/repuestos/camiones', prioridad: 0.9, frecuencia: 'weekly' },
    { ruta: '/repuestos/autos', prioridad: 0.9, frecuencia: 'weekly' },
    { ruta: '/servicios', prioridad: 0.7, frecuencia: 'monthly' },
    { ruta: '/sobre-nosotros', prioridad: 0.5, frecuencia: 'monthly' },
    { ruta: '/contacto', prioridad: 0.8, frecuencia: 'monthly' },
  ]

  const ahora = new Date()

  return rutas.map(({ ruta, prioridad, frecuencia }) => ({
    url: `${BASE}${ruta}`,
    lastModified: ahora,
    changeFrequency: frecuencia,
    priority: prioridad,
  }))
}
