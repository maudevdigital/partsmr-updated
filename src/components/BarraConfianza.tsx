import { Truck, Clock, ShieldCheck } from 'lucide-react'
import { PROMESAS, CIFRAS, PAISES } from '../lib/constants'

// Franja de confianza entre el navbar y el hero.
//
// Responde las tres dudas que frenan una compra a distancia (cobertura, plazo
// y garantia) sin robarle altura al hero. Se mantiene deliberadamente en una
// sola linea: cada pixel que crece aqui es un pixel que el hero pierde en la
// primera pantalla, y el hero es el que carga el mensaje principal.
//
// Flota SOBRE el hero en lugar de ocupar su propio espacio: fondo translucido
// con desenfoque, para que la fotografia se vea a traves y la franja no se
// lea como una segunda barra de navegacion pegada al navbar. Al no estar en el
// flujo, tampoco le resta altura al hero.
// El posicionamiento lo pone el contenedor en page.js.

const BENEFICIOS = [
  { icono: Truck, texto: `Envíos a ${PAISES.length} países` },
  { icono: Clock, texto: `Importación en ${PROMESAS.plazoImportacion}` },
  { icono: ShieldCheck, texto: `Garantía de ${PROMESAS.garantia}` },
]

const TRAYECTORIA = [
  { valor: CIFRAS.anios, unidad: 'años' },
  { valor: CIFRAS.piezas, unidad: 'piezas' },
  { valor: CIFRAS.clientes, unidad: 'clientes' },
]

export default function BarraConfianza() {
  return (
    <section
      className="bg-[#0f172a]/55 backdrop-blur-md border-b border-white/10"
      aria-label="Garantías, cobertura y trayectoria"
    >
      {/* Scroll horizontal en movil en vez de apilar: apilar multiplicaria la
          altura justo donde la pantalla es mas escasa. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-x-5 sm:gap-x-8 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {BENEFICIOS.map(({ icono: Icono, texto }) => (
            <span
              key={texto}
              className="flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Icono className="w-4 h-4 text-[#ff8a00]" strokeWidth={2.5} />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white drop-shadow">
                {texto}
              </span>
            </span>
          ))}

          <span className="hidden lg:block h-4 w-px bg-white/15 shrink-0" aria-hidden="true" />

          <dl className="flex items-center gap-x-5 sm:gap-x-6 lg:ml-auto shrink-0">
            {TRAYECTORIA.map(({ valor, unidad }) => (
              <div key={unidad} className="flex items-baseline gap-1.5 whitespace-nowrap">
                <dt className="sr-only">{unidad}</dt>
                <dd className="flex items-baseline gap-1.5">
                  <span className="text-[12px] font-bold text-[#ff8a00]">{valor}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80 drop-shadow">
                    {unidad}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
