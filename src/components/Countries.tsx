'use client'

import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Globe2 } from 'lucide-react'
import 'swiper/css'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700'] })

const paises = [
  {
    nombre: 'Chile',
    descripcion: 'Envíos rápidos a todo el país.',
    bandera: '/flags/bandera-chile.png',
  },
  {
    nombre: 'Estados Unidos',
    descripcion: 'Suministro internacional de alta confiabilidad.',
    bandera: '/flags/bandera-usa.png',
  },
  {
    nombre: 'Paraguay',
    descripcion: 'Cobertura eficiente para maquinaria y flotas.',
    bandera: '/flags/bandera-paraguay.png',
  },
  {
    nombre: 'Bolivia',
    descripcion: 'Repuestos garantizados para todo el país.',
    bandera: '/flags/bandera-bolivia.png',
  },
  {
    nombre: 'Perú',
    descripcion: 'Especialistas en equipos para minería y construcción.',
    bandera: '/flags/bandera-peru.png',
  },
  {
    nombre: 'Argentina',
    descripcion: 'Entrega rápida y soporte técnico incluido.',
    bandera: '/flags/bandera-argentina.png',
  },
]

export default function Countries() {
  return (
    <section className={`bg-[#f9fafb] py-20 px-4 sm:px-8 md:px-16 ${montserrat.className}`}>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center mb-3">
          <Globe2 className="text-[#FF8A00] w-6 h-6 mr-2" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Presencia en <span className="text-[#FF8A00]">Latinoamérica y USA</span>
          </h2>
        </div>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Entregamos repuestos en múltiples países de forma rápida, segura y con cobertura especializada.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4.5 },
        }}
        spaceBetween={24}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={4500}
        className="w-full"
      >
        {paises.map((pais, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-gray-200 hover:border-[#FF8A00]/50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] px-6 py-6 text-center">
              <div className="mb-4 flex justify-center items-center h-[44px]">
                <Image
                  src={pais.bandera}
                  alt={`Bandera de ${pais.nombre}`}
                  width={64}
                  height={42}
                  className="rounded shadow-sm object-contain max-h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{pais.nombre}</h3>
              <p className="text-sm text-gray-600 mt-1">{pais.descripcion}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
