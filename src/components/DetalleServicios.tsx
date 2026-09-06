import { SERVICIOS } from '../data/servicios'
import { EMPRESA } from '../lib/constants'

// Datos estructurados de /servicios.
//
// No renderiza nada visible: el contexto de faena y la llamada a la accion
// viven en la propia pagina, donde corresponde. Este componente existe solo
// porque la pagina es un componente cliente y el marcado conviene emitirlo
// desde el servidor.
//
// El tipo Service le dice a Google que aqui se ofrece servicio tecnico y no
// solo venta de productos, que es una categoria distinta de resultados y donde
// la competencia directa no compite.
export default function DetalleServicios() {
  const marcado = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: SERVICIOS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.titulo,
        description: s.descripcion,
        serviceType: s.terminos[0],
        provider: {
          '@type': 'Organization',
          name: EMPRESA.nombre,
          url: EMPRESA.url,
        },
        areaServed: { '@type': 'Country', name: 'Chile' },
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(marcado) }}
    />
  )
}
