import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { Wrench, ArrowRight } from 'lucide-react'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function ServicesSection() {
  return (
    <section
      className={`${montserrat.className} relative w-full h-[400px] sm:h-[500px] lg:h-[550px] flex items-center justify-center overflow-hidden bg-black`}
    >
      {/* Imagen de fondo */}
      <Image
        src="/services/maquinaria-bg.webp"
        alt="Servicios maquinaria"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center"
      />

      {/* Capa oscura sobre la imagen */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 z-0" />

      {/* Overlay de contenido */}
      <div className="relative z-10 text-center px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Wrench className="w-6 h-6 text-[#FF8A00]" />
          <span className="inline-block bg-orange-500/20 border border-orange-500/50 text-orange-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Servicios Especializados
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          Servicios para Maquinaria
        </h2>
        <p className="text-white text-base sm:text-lg max-w-xl mx-auto mb-6 font-medium leading-relaxed drop-shadow">
          Ofrecemos transporte, desmontaje y montaje para maquinaria de movimiento de tierra, asegurando eficiencia y seguridad en cada operación.
        </p>
        <a
          href="/servicios"
          className="inline-flex items-center gap-2 bg-[#ff8a00] hover:bg-[#e67a00] text-[#0f172a] font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
        >
          Ver Servicios
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
