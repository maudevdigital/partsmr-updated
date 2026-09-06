import type { Metadata } from 'next'

// La pagina de esta ruta es un componente cliente y por eso no puede exportar
// metadata; el layout si. Sin esto las ocho paginas del sitio compartian el
// titulo y la descripcion de la home, y competian entre si en los resultados.
export const metadata: Metadata = {
  title: 'Repuestos para Camiones de Carga',
  description:
    'Turbos, radiadores, embragues y sistemas de freno para camiones Mercedes-Benz, Volvo, Scania, Freightliner, Hino e Isuzu. Cotización en menos de 24 horas.',
  alternates: {
    canonical: '/repuestos/camiones',
  },
  openGraph: {
    title: 'Repuestos para Camiones de Carga | PartsMR',
    description:
      'Turbos, radiadores, embragues y sistemas de freno para camiones Mercedes-Benz, Volvo, Scania, Freightliner, Hino e Isuzu. Cotización en menos de 24 horas.',
    url: '/repuestos/camiones',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
