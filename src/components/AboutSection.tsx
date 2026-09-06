'use client'

import { Montserrat } from 'next/font/google'
import { useState } from 'react'
import { CheckCircle, Award, TrendingUp } from 'lucide-react'

// ✅ Importamos y configuramos Montserrat localmente
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function AboutSection() {
  return (
    <section className={`${montserrat.className} bg-white py-16 px-4 sm:px-8 md:px-16 text-[#171717] overflow-x-hidden`}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-[#FF8A00]" />
            <p className="text-[#FF8A00] font-bold">Sobre Nosotros</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Variedad de soluciones y servicio <span className="text-[#FF8A00]">de Excelencia</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            En PartsMR, nos adaptamos a tus necesidades. Nuestra experiencia con empresas y clientes
            nos compromete a brindar un servicio efectivo, serio y garantizado 100% online.
          </p>

          <div className="flex items-start gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-[#FF8A00] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Nuestra Diferencia</h3>
              <p className="text-base sm:text-lg text-gray-700">
                Nos destacamos por ofrecer los mejores precios del mercado y acceso a todo tipo de repuestos y
                componentes multimarca. En PartsMR, usted encontrará la solución perfecta para optimizar el
                rendimiento de su maquinaria y vehículos.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="font-medium">Servicio 100% online garantizado</span>
          </div>

          <a
            href="/sobre-nosotros"
            className="inline-flex items-center gap-2 bg-[#ff8a00] hover:bg-[#e67a00] text-[#0f172a] font-semibold px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg"
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
