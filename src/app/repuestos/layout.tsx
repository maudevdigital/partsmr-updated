import type { Metadata } from 'next'

// La pagina de esta ruta es un componente cliente y por eso no puede exportar
// metadata; el layout si. Sin esto las ocho paginas del sitio compartian el
// titulo y la descripcion de la home, y competian entre si en los resultados.
export const metadata: Metadata = {
  title: {
    // Un title en forma de string corta la plantilla heredada, y las rutas
    // hijas (autos, camiones, maquinaria) se quedaban sin el sufijo de marca.
    // Al redeclarar el template aqui, vuelven a recibirlo.
    template: '%s | PartsMR',
    default: 'Catálogo de Repuestos para Autos, Camiones y Maquinaria',
  },
  description:
    'Repuestos originales y alternativos para vehículos livianos, camiones y maquinaria pesada. Cotiza en línea con envíos a Chile, Perú, Bolivia, Argentina, Paraguay y EE.UU.',
  alternates: {
    canonical: '/repuestos',
  },
  openGraph: {
    title: 'Catálogo de Repuestos para Autos, Camiones y Maquinaria | PartsMR',
    description:
      'Repuestos originales y alternativos para vehículos livianos, camiones y maquinaria pesada. Cotiza en línea con envíos a Chile, Perú, Bolivia, Argentina, Paraguay y EE.UU.',
    url: '/repuestos',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
