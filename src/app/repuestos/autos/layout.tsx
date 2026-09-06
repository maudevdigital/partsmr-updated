import type { Metadata } from 'next'
import FamiliasRepuestos from '../../../components/FamiliasRepuestos'

// La pagina de esta ruta es un componente cliente y por eso no puede exportar
// metadata; el layout si. Sin esto las ocho paginas del sitio compartian el
// titulo y la descripcion de la home, y competian entre si en los resultados.
export const metadata: Metadata = {
  title: 'Repuestos y Motores para Autos y Camionetas',
  description:
    'Motores, kits de reparación, pistones, empaquetaduras y culatas para autos y camionetas Toyota, Chevrolet, Nissan, Hyundai, Kia, Chery y Haval. Envíos a Chile, Perú, Bolivia, Argentina, Paraguay y EE.UU.',
  alternates: {
    canonical: '/repuestos/autos',
  },
  openGraph: {
    title: 'Repuestos para Autos y Camionetas | PartsMR',
    description:
      'Motores, kits de reparación, pistones, empaquetaduras y culatas para autos y camionetas Toyota, Chevrolet, Nissan, Hyundai, Kia, Chery y Haval. Envíos a Chile, Perú, Bolivia, Argentina, Paraguay y EE.UU.',
    url: '/repuestos/autos',
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
        tipo="auto"
        titulo="Repuestos para autos y camionetas"
        intro="Línea de motor completa para vehículos livianos: motores, kits de reparación, pistones, empaquetaduras y culatas, más los consumibles de mantención habitual. Trabajamos marcas europeas, americanas y asiáticas, incluidas las chinas de ingreso reciente, para las que el repuesto suele ser más difícil de encontrar."
        marcas={['Toyota', 'Chevrolet', 'Nissan', 'Hyundai', 'Kia', 'Ford', 'Volkswagen', 'Mercedes-Benz', 'BMW', 'Mazda', 'Chery', 'Haval', 'Great Wall', 'MG']}
      />
    </>
  )
}
