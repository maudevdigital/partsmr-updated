import { familiasDe } from '../data/piezas'
import { PROMESAS } from '../lib/constants'
import type { TipoVehiculo } from '../data/marcas'

// Bloque de contenido para las paginas de categoria.
//
// Existe por SEO: esas paginas tenian titulo propio pero casi nada de texto, y
// sin contenido Google no tiene con que posicionarlas frente a busquedas como
// "culata motor Caterpillar" o "kit reparacion motor Hilux". Nombra las piezas
// que realmente se trabajan, que es tambien lo que la gente escribe al buscar.
//
// Es un componente de servidor: no tiene estado ni interaccion, asi que su
// contenido viaja en el HTML inicial y es indexable.

type Props = {
  tipo: TipoVehiculo
  titulo: string
  intro: string
  marcas: string[]
}

export default function FamiliasRepuestos({ tipo, titulo, intro, marcas }: Props) {
  const familias = familiasDe(tipo)

  return (
    <section className="bg-white py-14 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4">{titulo}</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mb-10">{intro}</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {familias.map(({ nombre, detalle }) => (
            <li
              key={nombre}
              className="rounded-xl border border-gray-200 p-5 hover:border-[#ffd9a8] transition"
            >
              <h3 className="font-semibold text-[#0f172a] mb-1.5">{nombre}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{detalle}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-xl bg-[#fff4e6] border border-[#ffd9a8] p-6">
          <h3 className="font-semibold text-[#0f172a] mb-2">Marcas que atendemos</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {marcas.join(' · ')} y otras. Si tu marca no aparece, cotiza igual: trabajamos
            con más de 100 proveedores y podemos ubicar la pieza por número de parte.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            Importación en {PROMESAS.plazoImportacion} desde la confirmación del pedido, con{' '}
            {PROMESAS.garantia} de garantía en cada repuesto despachado y respuesta a tu
            cotización en {PROMESAS.tiempoRespuesta}.
          </p>
        </div>
      </div>
    </section>
  )
}
