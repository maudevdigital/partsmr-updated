import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { Wrench, ArrowRight } from 'lucide-react'
import { SERVICIOS } from '../data/servicios'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

// Servicios tecnicos en la home.
//
// Antes anunciaba "transporte, desmontaje y montaje", servicios que la pagina
// de servicios no ofrece: prometia una cosa y al entrar habia otra. Ahora lista
// los cuatro reales, leidos de la misma fuente que alimenta esa pagina.
//
// Y los nombra en vez de describirlos en abstracto: quien llega buscando un
// overhaul necesita ver la palabra, no "servicios especializados".
export default function ServicesSection() {
  return (
    <section
      className={`${montserrat.className} relative w-full flex items-center justify-center overflow-hidden bg-black py-16 sm:py-20`}
    >
      <Image
        src="/services/maquinaria-bg.webp"
        alt="Excavadora en faena minera"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/85 z-0" />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Wrench className="w-6 h-6 text-[#ff8a00]" />
          <span className="inline-block bg-[#ff8a00]/20 border border-[#ff8a00]/50 text-[#ffb866] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Servicio técnico
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          No solo vendemos el repuesto: intervenimos el equipo
        </h2>
        <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow">
          Trabajamos con operaciones mineras y de construcción, donde una máquina detenida
          cuesta por hora y el proveedor debe cumplir los estándares de la faena.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9 text-left">
          {SERVICIOS.map((s) => (
            <li
              key={s.slug}
              className="flex items-start gap-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-4 py-3"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff8a00] shrink-0" />
              <span className="text-white text-sm font-medium leading-snug">{s.titulo}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 bg-[#ff8a00] hover:bg-[#e67a00] text-[#0f172a] font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
        >
          Ver servicios
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
