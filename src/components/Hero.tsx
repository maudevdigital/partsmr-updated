'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const slides = [
  {
    tipo: 'Auto',
    fondo: '/hero-auto.jpg',
    titulo: 'Repuestos certificados para tu auto',
    subtitulo: 'Envíos express y soporte personalizado.',
    marcas: [
      '/mercedes-auto.png',
      '/bmw-auto.png',
      '/audi-auto.png',
      '/porsche-auto.png',
      '/chevrolet-auto.png',
      '/ford-auto.png',
    ],
  },
  {
    tipo: 'Maquinaria',
    fondo: '/hero-maquinaria.jpg',
    titulo: 'Componentes robustos para maquinaria pesada',
    subtitulo: 'Para minería, construcción e industria.',
    marcas: [
      '/cat-maquina.png',
      '/komatsu-maquina.png',
      '/jcb-maquina.png',
      '/bobcat-maquina.png',
      '/doosan-maquina.png',
    ],
  },
  {
    tipo: 'Camión',
    fondo: '/hero-camion.jpg',
    titulo: 'Repuestos seguros para flotas y camiones',
    subtitulo: 'Soporte 24/7 y cobertura nacional.',
    marcas: [
      '/mercedes-camion.png',
      '/volvo-camion.png',
      '/jac-camion.png',
      '/higer-camion.png',
    ],
  },
]

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] -mt-[64px] z-0">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 7000 }}
        loop
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full flex flex-col items-center justify-center text-center overflow-hidden bg-black">
              {/* Fondo */}
              <Image
                src={slide.fondo}
                alt={`Fondo ${slide.tipo}`}
                fill
                sizes="100vw"
                priority
                className="absolute inset-0 z-0 object-cover object-center opacity-90"
              />

              {/* Capa oscura */}
              <div className="absolute inset-0 bg-black/60 z-10" />

              {/* Contenido principal */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 px-4 text-white max-w-4xl"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">
                  {slide.titulo}
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-300 drop-shadow">
                  {slide.subtitulo}
                </p>
                <a
                  href="#contacto"
                  className="inline-block mb-10 bg-[#FF8A00] hover:bg-[#e67e00] text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                  Cotiza Ahora
                </a>
              </motion.div>

              {/* Bloque de marcas */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="relative z-20 bg-white/30 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg max-w-[90%] w-auto overflow-x-auto whitespace-nowrap scrollbar-hide"
              >
                <div className="flex justify-center items-center gap-6">
                  {slide.marcas.map((marca, i) => {
                    const isBMW = marca.includes('bmw')
                    const isPorsche = marca.includes('porsche')
                    const width = isBMW ? 65 : isPorsche ? 50 : 80
                    const height = isBMW ? 40 : isPorsche ? 45 : 50

                    return (
                      <div
                        key={i}
                        className="flex items-center justify-center"
                        style={{ width: `${width}px`, height: `${height}px` }}
                      >
                        <Image
                          src={marca}
                          alt={`Marca ${i}`}
                          width={width}
                          height={height}
                          className="object-contain drop-shadow-md"
                        />
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.3);
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background-color: #ff8a00 !important;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
          width: 30px;
          height: 30px;
          top: 50%;
          transform: translateY(-50%);
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 20px;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
