'use client'

import { Montserrat } from 'next/font/google'
import { useState } from 'react'

// ✅ Importamos y configuramos Montserrat localmente
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function AboutSection() {
  return (
    <section className={`${montserrat.className} bg-[#f9fafb] py-16 px-4 sm:px-8 md:px-16 text-[#171717] overflow-x-hidden`}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <p className="text-[#FF8A00] font-bold mb-2">Sobre Nosotros</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Variedad de soluciones y servicio <span className="text-[#FF8A00]">de Excelencia</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            En PartsMR, nos adaptamos a tus necesidades. Nuestra experiencia con empresas y clientes
            nos compromete a brindar un servicio efectivo, serio y garantizado 100% online.
          </p>

          <h3 className="text-2xl font-bold mb-3">Nuestra Diferencia</h3>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Nos destacamos por ofrecer los mejores precios del mercado y acceso a todo tipo de repuestos y
            componentes multimarca. En PartsMR, usted encontrará la solución perfecta para optimizar el
            rendimiento de su maquinaria y vehículos.
          </p>

          <a
            href="/sobre-nosotros"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Conócenos
          </a>
        </div>

        {/* Video de YouTube en lugar de galería */}
        <div className="rounded-2xl overflow-hidden border-2 border-[#FF8A00] shadow-md">
          <div className="relative w-full pb-[56.25%] h-0">
            <iframe
              src="https://www.youtube.com/embed/BF4mAr3_EVA?si=ui0_heQkutYJesss"
              title="Video institucional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
