import type { Metadata } from 'next'

// La pagina de esta ruta es un componente cliente y por eso no puede exportar
// metadata; el layout si. Sin esto las ocho paginas del sitio compartian el
// titulo y la descripcion de la home, y competian entre si en los resultados.
export const metadata: Metadata = {
  title: 'Repuestos para Autos y Camionetas',
  description:
    'Frenos, motor, suspensión, filtros y transmisión para autos y camionetas. Marcas europeas, americanas y asiáticas. Importación en 7 a 15 días con garantía de 6 meses.',
  alternates: {
    canonical: '/repuestos/autos',
  },
  openGraph: {
    title: 'Repuestos para Autos y Camionetas | PartsMR',
    description:
      'Frenos, motor, suspensión, filtros y transmisión para autos y camionetas. Marcas europeas, americanas y asiáticas. Importación en 7 a 15 días con garantía de 6 meses.',
    url: '/repuestos/autos',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
