import { Truck, Clock, ShieldCheck } from 'lucide-react'
import { PROMESAS, CIFRAS, PAISES } from '../lib/constants'

// Franja de confianza bajo el hero.
//
// Responde las tres dudas que frenan una compra de repuestos a distancia:
// si llega hasta donde estoy, cuanto demora y que pasa si sale malo. Antes el
// sitio decia "envio express garantizado", que no compromete nada concreto.
// Es un componente de servidor: no tiene estado ni interaccion.

const BENEFICIOS = [
  {
    icono: Truck,
    titulo: `Envíos a ${PAISES.length} países`,
    detalle: PAISES.map((p) => p.name).join(', '),
  },
  {
    icono: Clock,
    titulo: `Importación en ${PROMESAS.plazoImportacion}`,
    detalle: 'Plazo estimado desde la confirmación del pedido',
  },
  {
    icono: ShieldCheck,
    titulo: `Garantía de ${PROMESAS.garantia}`,
    detalle: 'Respaldo directo en cada repuesto despachado',
  },
]

const TRAYECTORIA = [
  { valor: CIFRAS.anios, unidad: 'años importando' },
  { valor: CIFRAS.piezas, unidad: 'piezas despachadas' },
  { valor: CIFRAS.clientes, unidad: 'clientes atendidos' },
]

export default function BarraConfianza() {
  return (
    <section className="bg-[#0f172a] text-white" aria-label="Garantías y trayectoria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promesas */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 sm:py-10">
          {BENEFICIOS.map(({ icono: Icono, titulo, detalle }) => (
            <li key={titulo} className="flex items-start gap-3">
              <span className="shrink-0 rounded-lg bg-[#ff8a00] p-2">
                {/* Icono en tinta sobre naranja: 7.56:1 de contraste.
                    En blanco seria 2.36:1 y se leeria lavado al sol. */}
                <Icono className="w-5 h-5 text-[#0f172a]" strokeWidth={2.5} />
              </span>
              <div>
                <p className="font-semibold leading-tight">{titulo}</p>
                <p className="text-sm text-white/70 mt-0.5">{detalle}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Cifras */}
        <dl className="grid grid-cols-3 gap-4 border-t border-white/10 py-6 text-center">
          {TRAYECTORIA.map(({ valor, unidad }) => (
            <div key={unidad}>
              <dt className="sr-only">{unidad}</dt>
              <dd>
                <span className="block text-2xl sm:text-3xl font-bold text-[#ff8a00]">
                  {valor}
                </span>
                <span className="block text-xs sm:text-sm text-white/70 mt-1">
                  {unidad}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
