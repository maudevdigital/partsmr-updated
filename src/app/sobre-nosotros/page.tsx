'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/thumbs'

const images = [
  '/gallery/rep1.webp',
  '/gallery/rep2.webp',
  '/gallery/rep3.webp',
  '/gallery/rep4.webp',
]

export default function SobreNosotrosPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  return (
    <main className="bg-[#f9fafb] text-[#0f172a] font-montserrat overflow-x-hidden">
      <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-20">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Sobre <span className="text-orange-500">PartsMR</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Transformamos la forma en que las industrias acceden a repuestos, componentes y servicios técnicos. Agilizamos procesos, minimizamos detenciones y potenciamos la continuidad operativa a través de soluciones tecnológicas y un enfoque humano.
          </p>
        </div>

        {/* Historia y misión + galería */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24 min-w-0">
          <div>
            <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Nacimos para cubrir una necesidad crítica: disponibilidad inmediata de repuestos y soporte técnico de calidad, eliminando esperas y procesos complejos. Gracias a la tecnología y alianzas estratégicas con fabricantes, brindamos una experiencia eficiente, confiable y digital desde el primer contacto.
            </p>

            <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Asegurar que las operaciones de nuestros clientes nunca se detengan. Proveemos repuestos, partes y soluciones técnicas con foco en confiabilidad, rapidez y rentabilidad. No solo vendemos productos: resolvemos necesidades críticas.
            </p>
          </div>

          {/* Galería Swiper */}
          <div className="relative w-full overflow-hidden">
            <div className="p-1 rounded-2xl border-2 border-orange-500 bg-white">
              <Swiper
                loop
                grabCursor
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                className="rounded-xl group"
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={img}
                      alt={`Imagen ${i + 1}`}
                      width={800}
                      height={500}
                      className="w-full h-auto sm:h-[300px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="mt-4">
              <Swiper
                onSwiper={setThumbsSwiper}
                loop
                watchSlidesProgress
                spaceBetween={8}
                slidesPerView={3}
                className="!bg-transparent"
                breakpoints={{
                  640: { slidesPerView: 4, spaceBetween: 12 },
                  1024: { slidesPerView: 5 },
                }}
              >
                {images.map((img, i) => (
                  <SwiperSlide
                    key={`thumb-${i}`}
                    className="relative group cursor-pointer bg-white rounded-md"
                  >
                    <div className="relative">
                      <Image
                        src={img}
                        alt={`Miniatura ${i + 1}`}
                        width={80}
                        height={60}
                        className="rounded-md object-cover h-[60px] w-full border-2 border-transparent group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 rounded-md pointer-events-none z-10 swiper-slide-thumb-active:border-orange-500 swiper-slide-thumb-active:border-2"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Visión y valores */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Ser reconocidos como el aliado estratégico más confiable para empresas que dependen del funcionamiento continuo de su maquinaria, flota o transporte. Aspiramos a liderar una transformación digital en la industria, con foco en agilidad, eficiencia y orientación al cliente.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
            <ul className="text-gray-700 text-base sm:text-lg list-disc list-inside space-y-3">
              <li><strong>Compromiso:</strong> Actuamos con responsabilidad, sentido de urgencia y orientación al resultado.</li>
              <li><strong>Transparencia:</strong> Operamos con claridad, confianza y trazabilidad en cada proceso.</li>
              <li><strong>Excelencia:</strong> Superamos expectativas mediante mejora continua y atención personalizada.</li>
              <li><strong>Confiabilidad:</strong> Garantizamos respaldo técnico y cumplimiento en cada entrega.</li>
              <li><strong>Adaptabilidad:</strong> Nos ajustamos a la realidad operativa de cada cliente y sector.</li>
            </ul>
          </div>
        </div>

        {/* Cierre */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Por qué elegir PartsMR?</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Porque entendemos la urgencia operativa, cuidamos tus recursos y priorizamos tus resultados. En PartsMR combinamos conocimiento técnico, atención ágil y soluciones digitales para entregarte mucho más que repuestos: entregamos continuidad operacional.
          </p>
        </div>
      </section>
    </main>
  )
}
