import type { Metadata } from 'next'

// La pagina de esta ruta es un componente cliente y por eso no puede exportar
// metadata; el layout si. Sin esto las ocho paginas del sitio compartian el
// titulo y la descripcion de la home, y competian entre si en los resultados.
export const metadata: Metadata = {
  title: 'Repuestos para Maquinaria Pesada',
  description:
    'Cadenas, bombas hidráulicas, filtros y radiadores para excavadoras, bulldozers y cargadores Caterpillar, Komatsu, JCB, Volvo, Doosan y Sany.',
  alternates: {
    canonical: '/repuestos/maquinaria',
  },
  openGraph: {
    title: 'Repuestos para Maquinaria Pesada | PartsMR',
    description:
      'Cadenas, bombas hidráulicas, filtros y radiadores para excavadoras, bulldozers y cargadores Caterpillar, Komatsu, JCB, Volvo, Doosan y Sany.',
    url: '/repuestos/maquinaria',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
