import type { Metadata } from 'next'

// La pagina de esta ruta es un componente cliente y por eso no puede exportar
// metadata; el layout si. Sin esto las ocho paginas del sitio compartian el
// titulo y la descripcion de la home, y competian entre si en los resultados.
export const metadata: Metadata = {
  title: 'Sobre PartsMR',
  description:
    'Más de 5 años importando repuestos para maquinaria, camiones y vehículos livianos. Más de 10.000 piezas despachadas y 5.000 clientes en Latinoamérica.',
  alternates: {
    canonical: '/sobre-nosotros',
  },
  openGraph: {
    title: 'Sobre PartsMR | PartsMR',
    description:
      'Más de 5 años importando repuestos para maquinaria, camiones y vehículos livianos. Más de 10.000 piezas despachadas y 5.000 clientes en Latinoamérica.',
    url: '/sobre-nosotros',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
