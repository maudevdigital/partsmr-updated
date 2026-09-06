import { Truck, Clock, ShieldCheck } from 'lucide-react'
import { PROMESAS, CIFRAS, PAISES } from '../lib/constants'

// Franja de confianza entre el navbar y el hero.
//
// Va arriba a proposito: responde las tres dudas que frenan una compra de
// repuestos a distancia (si llega hasta donde estoy, cuanto demora, que pasa si
// sale malo) antes de que el visitante decida quedarse o irse. Comparte el
// fondo del header para leerse como una extension suya y no como otra seccion.
//
// El pt-16 compensa el header, que es fixed y no ocupa espacio en el flujo.
// Es compacta a proposito: si crece, empuja el hero fuera de la primera
// pantalla y se pierde el mensaje principal.

const BENEFICIOS = [
  {
    icono: Truck,
    texto: `Envíos a ${PAISES.length} países`,
    detalle: PAISES.map((p) => p.name).join(' · '),
  },
  {
    icono: Clock,
    texto: `Importación en ${PROMESAS.plazoImportacion}`,
    detalle: 'Plazo estimado desde la confirmación',
  },
  {
    icono: ShieldCheck,
    texto: `Garantía de ${PROMESAS.garantia}`,
    detalle: 'En cada repuesto despachado',
  },
]

const TRAYECTORIA = [
  { valor: CIFRAS.anios, unidad: 'años importando' },
  { valor: CIFRAS.piezas, unidad: 'piezas despachadas' },
  { valor: CIFRAS.clientes, unidad: 'clientes atendidos' },
]

export default function BarraConfianza() {
  return (
    <section
      className="bg-[#0f172a] pt-16 border-b border-white/10"
      aria-label="Garantías, cobertura y trayectoria"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
          {/* Promesas */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 flex-1">
            {BENEFICIOS.map(({ icono: Icono, texto, detalle }) => (
              <li key={texto} className="flex items-center gap-2.5">
                <span className="shrink-0 rounded-md bg-[#ff8a00] p-1.5">
                  {/* Tinta sobre naranja: 7.56:1. En blanco seria 2.36:1. */}
                  <Icono className="w-4 h-4 text-[#0f172a]" strokeWidth={2.5} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-white leading-tight">
                    {texto}
                  </span>
                  <span className="block text-[11px] text-white/50 truncate">
                    {detalle}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {/* Trayectoria */}
          <dl className="flex items-center justify-around lg:justify-end gap-5 sm:gap-7 border-t lg:border-t-0 lg:border-l border-white/10 pt-3 lg:pt-0 lg:pl-8">
            {TRAYECTORIA.map(({ valor, unidad }) => (
              <div key={unidad} className="text-center lg:text-right">
                <dt className="sr-only">{unidad}</dt>
                <dd>
                  <span className="block text-lg sm:text-xl font-bold text-[#ff8a00] leading-none">
                    {valor}
                  </span>
                  <span className="block text-[11px] text-white/60 mt-1 whitespace-nowrap">
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
