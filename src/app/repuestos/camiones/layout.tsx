import type { Metadata } from 'next'
import FamiliasRepuestos from '../../../components/FamiliasRepuestos'

// La pagina de esta ruta es un componente cliente y por eso no puede exportar
// metadata; el layout si. Sin esto las ocho paginas del sitio compartian el
// titulo y la descripcion de la home, y competian entre si en los resultados.
export const metadata: Metadata = {
  title: 'Repuestos y Motores para Camiones',
  description:
    'Motores, kits de reparación, pistones, empaquetaduras y culatas para camiones Mercedes-Benz, Volvo, Scania, Freightliner, MAN, Hino e Isuzu. Además turbos, compresores y embragues. Cotiza en menos de 24 horas.',
  alternates: {
    canonical: '/repuestos/camiones',
  },
  openGraph: {
    title: 'Repuestos para Camiones de Carga | PartsMR',
    description:
      'Motores, kits de reparación, pistones, empaquetaduras y culatas para camiones Mercedes-Benz, Volvo, Scania, Freightliner, MAN, Hino e Isuzu. Además turbos, compresores y embragues. Cotiza en menos de 24 horas.',
    url: '/repuestos/camiones',
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
        tipo="camion"
        titulo="Repuestos para camiones de carga"
        intro="Para flotas de transporte, donde un camión detenido cuesta cada día: motores, kits de reparación, pistones, empaquetaduras y culatas, junto a turbos, compresores de aire y embragues de carga pesada. Cotizamos por número de parte o con los datos del chasis, y despachamos a los seis países donde operamos."
        marcas={['Mercedes-Benz', 'Volvo', 'Scania', 'Freightliner', 'MAN', 'Iveco', 'Hino', 'Isuzu', 'DAF', 'Kenworth', 'International', 'Foton']}
      />
    </>
  )
}
