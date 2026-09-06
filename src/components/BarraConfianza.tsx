import { Truck, Clock, ShieldCheck } from 'lucide-react'

// Franja de confianza bajo el hero.
//
// Responde las tres dudas que frenan una compra de repuestos a distancia:
// si llega hasta donde estoy, cuanto demora y que pasa si sale malo. Antes el
// sitio decia "envio express garantizado", que no compromete nada concreto.
// Es un componente de servidor: no tiene estado ni interaccion.

const PROMESAS = [
  {
    icono: Truck,
    titulo: 'Envíos a 6 países',
    detalle: 'Chile, Perú, Bolivia, Argentina, Paraguay y EE.UU.',
  },
  {
    icono: Clock,
    titulo: 'Importación en 7 a 15 días',
    detalle: 'Plazo estimado desde la confirmación del pedido',
  },
  {
    icono: ShieldCheck,
    titulo: 'Garantía de 6 meses',
    detalle: 'Respaldo directo en cada repuesto despachado',
  },
]

const CIFRAS = [
  { valor: '+5', unidad: 'años importando' },
  { valor: '+10.000', unidad: 'piezas despachadas' },
  { valor: '+5.000', unidad: 'clientes atendidos' },
]

export default function BarraConfianza() {
  return (
    <section className="bg-[#0f172a] text-white" aria-label="Garantías y trayectoria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promesas */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 sm:py-10">
          {PROMESAS.map(({ icono: Icono, titulo, detalle }) => (
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
          {CIFRAS.map(({ valor, unidad }) => (
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
