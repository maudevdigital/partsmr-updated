import { SERVICIOS } from '../data/servicios'
import { EMPRESA } from '../lib/constants'

// Bloque de contenido y datos estructurados para /servicios.
//
// La pagina es un componente cliente y no puede exportar metadata ni conviene
// llenarla de texto; este bloque se monta desde el layout, que si es de
// servidor, de modo que el contenido viaja en el HTML inicial y es indexable.
//
// El marcado Service permite que Google entienda que aqui se ofrece un
// servicio tecnico y no solo venta de productos, que es la diferencia frente a
// la competencia directa.
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(marcado) }}
      />

      <section className="bg-white py-14 px-4 sm:px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4">
            Servicio técnico para maquinaria en faena
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Además de importar repuestos, intervenimos el equipo. Trabajamos con operaciones
            mineras y de construcción en Chile, donde una máquina detenida cuesta por hora y
            el proveedor tiene que cumplir los estándares de la faena para poder entrar.
          </p>

          <div className="mt-10 rounded-xl bg-[#fff4e6] border border-[#ffd9a8] p-6">
            <h3 className="font-semibold text-[#0f172a] mb-2">
              ¿Tu equipo está detenido?
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Cuéntanos qué máquina es y qué falla presenta. Evaluamos si conviene reparar el
              componente, hacer un semioverhaul o reemplazar la pieza, y te damos el costo de
              cada alternativa antes de intervenir.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
