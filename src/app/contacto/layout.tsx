import type { Metadata } from 'next'

// La pagina de esta ruta es un componente cliente y por eso no puede exportar
// metadata; el layout si. Sin esto las ocho paginas del sitio compartian el
// titulo y la descripcion de la home, y competian entre si en los resultados.
export const metadata: Metadata = {
  title: 'Contacto y Cotizaciones',
  description:
    'Cotiza tu repuesto y recibe respuesta en menos de 24 horas. Atención por WhatsApp, teléfono y correo para Chile, Perú, Bolivia, Argentina, Paraguay y EE.UU.',
  alternates: {
    canonical: '/contacto',
  },
  openGraph: {
    title: 'Contacto y Cotizaciones | PartsMR',
    description:
      'Cotiza tu repuesto y recibe respuesta en menos de 24 horas. Atención por WhatsApp, teléfono y correo para Chile, Perú, Bolivia, Argentina, Paraguay y EE.UU.',
    url: '/contacto',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
