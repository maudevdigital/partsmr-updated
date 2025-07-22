'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

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
    <section className="bg-[#f9fafb] py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Presencia en <span className="text-[#FF8A00]">Latinoamérica y USA</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Entregamos repuestos en múltiples países de forma rápida y segura.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.5}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4.5 },
        }}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={4000}
        className="w-full"
      >
        {paises.map((pais, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white hover:shadow-md transition-shadow duration-300 rounded-xl p-6 text-center h-full">
              <div className="mb-4 flex justify-center items-center h-[42px]">
                <Image
                  src={pais.bandera}
                  alt={`Bandera de ${pais.nombre}`}
                  width={64}
                  height={42}
                  style={{ height: 'auto' }}
                  className="rounded shadow-sm max-h-full object-contain"
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
