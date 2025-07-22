'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/thumbs'

const images = [
  '/gallery/rep1.webp',
  '/gallery/rep2.webp',
  '/gallery/rep3.webp',
  '/gallery/rep4.webp',
]

export default function AboutSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  return (
    <section className="bg-[#f9fafb] py-16 px-4 sm:px-8 md:px-16 text-[#171717] overflow-x-hidden">
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
            href="#contacto"
            className="inline-block bg-[#FF8A00] hover:bg-[#e67e00] text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Conoce nuestras soluciones
          </a>
        </div>

        {/* Galería principal + miniaturas */}
        <div className="relative max-w-full overflow-hidden">
          {/* Imagen principal */}
          <div className="p-1 rounded-[20px] border-2 border-[#FF8A00] overflow-hidden bg-white">
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

          {/* Miniaturas */}
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
    </section>
  )
}
