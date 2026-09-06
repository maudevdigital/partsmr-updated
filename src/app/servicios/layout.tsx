import type { Metadata } from 'next'

// La pagina de esta ruta es un componente cliente y por eso no puede exportar
// metadata; el layout si. Sin esto las ocho paginas del sitio compartian el
// titulo y la descripcion de la home, y competian entre si en los resultados.
export const metadata: Metadata = {
  title: 'Servicios de Importación y Asesoría Técnica',
  description:
    'Te ayudamos a identificar la pieza correcta, gestionamos la importación y despachamos a seis países. Asesoría técnica especializada en maquinaria y transporte.',
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: 'Servicios de Importación y Asesoría Técnica | PartsMR',
    description:
      'Te ayudamos a identificar la pieza correcta, gestionamos la importación y despachamos a seis países. Asesoría técnica especializada en maquinaria y transporte.',
    url: '/servicios',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
