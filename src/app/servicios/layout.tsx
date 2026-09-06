import type { Metadata } from 'next'
import DetalleServicios from '../../components/DetalleServicios'

// La pagina de esta ruta es un componente cliente y por eso no puede exportar
// metadata; el layout si. Sin esto las ocho paginas del sitio compartian el
// titulo y la descripcion de la home, y competian entre si en los resultados.
export const metadata: Metadata = {
  title: 'Overhaul, Reparación y Fortificación de Maquinaria Pesada',
  description:
    'Overhaul y semioverhaul de excavadoras y cargadores, reparación de componentes hidráulicos, fortificación de baldes con placas antidesgaste y acreditación para faenas mineras.',
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: 'Servicios de Importación y Asesoría Técnica | PartsMR',
    description:
      'Overhaul y semioverhaul de excavadoras y cargadores, reparación de componentes hidráulicos, fortificación de baldes con placas antidesgaste y acreditación para faenas mineras.',
    url: '/servicios',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* Contenido indexable y marcado Service: la pagina es componente
          cliente y no puede aportarlos por si misma. */}
      <DetalleServicios />
    </>
  )
}
