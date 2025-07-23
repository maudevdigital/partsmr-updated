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
    <main className="bg-[#f9fafb] text-[#0f172a] font-montserrat">
      <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-16 overflow-x-hidden">
        {/* Título y presentación */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Sobre <span className="text-orange-500">PartsMR</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Somos una empresa especializada en soluciones inteligentes para el abastecimiento de repuestos,
            componentes y servicios relacionados al mantenimiento de maquinaria, vehículos industriales y flotas. Nuestro enfoque está en maximizar la operatividad de nuestros clientes, reducir sus tiempos de parada y aportar a su eficiencia operativa.
          </p>
        </div>

        {/* Historia y misión */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Nacimos con el propósito de cubrir una necesidad clave en la industria: disponer de repuestos y soporte técnico de calidad sin largas esperas, complejidades logísticas o procesos burocráticos. En PartsMR combinamos tecnología, alianzas estratégicas con fabricantes y un equipo altamente comprometido para ofrecer una experiencia eficiente, rápida y totalmente digital.
            </p>

            <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Ayudar a empresas e industrias a mantener sus operaciones en movimiento mediante el suministro confiable, oportuno y rentable de repuestos, partes y soluciones técnicas. Nos enfocamos en resolver problemas, no solo vender productos.
            </p>
          </div>

          {/* Galería de imágenes */}
          <div className="relative max-w-full overflow-hidden">
            <div className="p-1 rounded-[20px] border-2 border-orange-500 overflow-hidden bg-white">
              <Swiper
                loop
                grabCursor
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                className="rounded-[18px] group"
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="cursor-grab active:cursor-grabbing">
                      <Image
                        src={img}
                        alt={`Imagen ${i + 1}`}
                        width={800}
                        height={500}
                        className="w-full h-[300px] sm:h-[380px] object-cover rounded-[16px] transition-transform group-hover:scale-[1.02]"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="mt-4 max-w-full overflow-hidden">
              <Swiper
                onSwiper={setThumbsSwiper}
                loop
                watchSlidesProgress
                spaceBetween={12}
                slidesPerView={4}
                breakpoints={{
                  0: { slidesPerView: 3 },
                  640: { slidesPerView: 4 },
                  1024: { slidesPerView: 5 },
                }}
              >
                {images.map((img, i) => (
                  <SwiperSlide key={`thumb-${i}`} className="relative group cursor-pointer">
                    <Image
                      src={img}
                      alt={`Miniatura ${i + 1}`}
                      width={80}
                      height={60}
                      className="rounded-md object-cover h-[60px] border-2 border-transparent transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div className="swiper-slide-thumb-active absolute inset-0 bg-black/20 rounded-md pointer-events-none transition duration-300" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Visión y valores */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Convertirnos en el aliado estratégico más confiable para empresas que dependen del funcionamiento continuo de maquinaria pesada, transporte o vehículos industriales. Buscamos liderar el cambio hacia una industria más ágil, conectada y centrada en el cliente.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
            <ul className="text-gray-700 text-base sm:text-lg list-disc list-inside space-y-3">
              <li><strong>Compromiso:</strong> Respondemos con seriedad, rapidez y foco en la solución.</li>
              <li><strong>Transparencia:</strong> Cada cotización, entrega y servicio es claro y sin sorpresas.</li>
              <li><strong>Excelencia:</strong> Buscamos mejorar continuamente nuestros procesos y atención.</li>
              <li><strong>Confiabilidad:</strong> Cumplimos lo que prometemos y respaldamos cada producto que ofrecemos.</li>
              <li><strong>Adaptabilidad:</strong> Nos ajustamos a las particularidades y urgencias de cada cliente.</li>
            </ul>
          </div>
        </div>

        {/* Enfoque y cierre */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Por qué elegir PartsMR?</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Porque entendemos tu urgencia, respetamos tus recursos y nos importan tus resultados. Somos un equipo técnico, comprometido y con visión de largo plazo. PartsMR no solo provee repuestos, sino que aporta valor desde la logística, la planificación de mantenimiento y la digitalización del proceso de compra.
          </p>
        </div>
      </section>
    </main>
  )
}
