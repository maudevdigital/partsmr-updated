import type { Metadata } from 'next'
import FamiliasRepuestos from '../../../components/FamiliasRepuestos'

// La pagina de esta ruta es un componente cliente y por eso no puede exportar
// metadata; el layout si. Sin esto las ocho paginas del sitio compartian el
// titulo y la descripcion de la home, y competian entre si en los resultados.
export const metadata: Metadata = {
  title: 'Repuestos y Motores para Maquinaria Pesada',
  description:
    'Motores, kits de reparación, pistones, empaquetaduras y culatas para excavadoras, bulldozers y cargadores Caterpillar, Komatsu, JCB, Volvo, Hitachi y Liebherr. Importación en 7 a 15 días con garantía de 6 meses.',
  alternates: {
    canonical: '/repuestos/maquinaria',
  },
  openGraph: {
    title: 'Repuestos para Maquinaria Pesada | PartsMR',
    description:
      'Motores, kits de reparación, pistones, empaquetaduras y culatas para excavadoras, bulldozers y cargadores Caterpillar, Komatsu, JCB, Volvo, Hitachi y Liebherr. Importación en 7 a 15 días con garantía de 6 meses.',
    url: '/repuestos/maquinaria',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* Contenido indexable: la pagina en si es un componente cliente y tenia
          titulo propio pero casi nada de texto con que posicionar. */}
      <FamiliasRepuestos
        tipo="maquinaria"
        titulo="Repuestos para maquinaria pesada"
        intro="Trabajamos la línea completa de motor para maquinaria de construcción y minería: motores, kits de reparación, pistones, empaquetaduras y culatas, además de los componentes que más salen de servicio en faena. Cotizamos por número de parte, por número de serie del equipo o con una foto de la pieza, y despachamos a los seis países donde operamos."
        marcas={['Caterpillar', 'Komatsu', 'John Deere', 'JCB', 'Volvo', 'Hitachi', 'Liebherr', 'Doosan', 'Sany', 'XCMG', 'Bobcat', 'Kubota']}
      />
    </>
  )
}
