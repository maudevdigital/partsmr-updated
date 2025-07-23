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
      '/brand/car/mercedes-auto.png',
      '/brand/car/bmw-auto.png',
      '/brand/car/porsche-auto.png',
      '/brand/car/chevrolet-auto.png',
      '/brand/car/ford-auto.png',
      '/brand/car/volks-auto.png',
      '/brand/car/great-auto.png',
      '/brand/car/haval-auto.png',
      '/brand/car/chery-auto.png',
    ],
    cta: {
      texto: 'Cotiza Ahora',
      href: '#contacto',
    },
  },
  {
    tipo: 'Maquinaria',
    fondo: '/hero-maquinaria.jpg',
    titulo: 'Componentes robustos para maquinaria pesada',
    subtitulo: 'Para minería, construcción e industria.',
    marcas: [
      '/brand/machinery/cat-maquina.png',
      '/brand/machinery/komatsu-maquina.png',
      '/brand/machinery/jcb-maquina.png',
      '/brand/machinery/bobcat-maquina.png',
      '/brand/machinery/doosan-maquina.png',
      '/brand/machinery/deere-maquina.png',
      '/brand/machinery/sany-maquina.png',
      '/brand/machinery/volvo-maquina.png',
      '/brand/machinery/xcmg-maquina.png',
    ],
    cta: {
      texto: 'Solicita tu Cotización',
      href: '#contacto',
    },
  },
  {
    tipo: 'Camión',
    fondo: '/hero-camion.jpg',
    titulo: 'Repuestos seguros para flotas y camiones',
    subtitulo: 'Soporte 24/7 y cobertura nacional.',
    marcas: [
      '/brand/truck/mercedes-camion.png',
      '/brand/truck/volvo-camion.png',
      '/brand/truck/jac-camion.png',
      '/brand/truck/higer-camion.png',
      '/brand/truck/foton-camion.png',
      '/brand/truck/frei-camion.png',
      '/brand/truck/scania-camion.png',
    ],
    cta: {
      texto: 'Cotiza para tu Flota',
      href: '#contacto',
    },
  },
  {
    tipo: 'SymxAi',
    fondo: '/symx-ai.webp',
    titulo: 'MANTENIMIENTO PREDICTIVO Y GESTIÓN DE FLOTAS CON AI',
    subtitulo:
      'Inteligencia artificial para predecir fallas y gestión de flota. Ahorra tiempo, reduce paradas y mantén tu flota operativa.',
    marcas: [],
    cta: {
      texto: 'Ver Alianza',
      href: '#symx',
    },
  },
]

export default function Hero() {
  return (
    <section className="relative w-screen h-[90vh] sm:h-[95vh] md:h-[100vh] -mt-[64px] overflow-hidden z-0">
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
            <div className="relative h-full w-full flex flex-col items-center justify-center text-center overflow-hidden bg-black px-4">
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
                className="relative z-20 text-white max-w-4xl"
              >
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mb-3 drop-shadow-lg">
                  {slide.titulo}
                </h1>
                <p className="text-sm sm:text-base md:text-xl mb-5 text-gray-300 drop-shadow">
                  {slide.subtitulo}
                </p>
                {slide.cta && (
                  <a
                    href={slide.cta.href}
                    className="inline-block mb-8 text-sm sm:text-base md:text-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg transition"
                  >
                    {slide.cta.texto}
                  </a>
                )}
              </motion.div>

              {/* Marcas - Responsive */}
              {slide.marcas.length > 0 && (
                <>
                  {/* Desktop */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    className="hidden sm:flex absolute bottom-16 z-30 bg-white/30 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg max-w-[90%] w-auto overflow-x-auto whitespace-nowrap scrollbar-hide touch-pan-x"
                  >
                    <div className="flex justify-start sm:justify-center items-center gap-4 sm:gap-6">
                      {slide.marcas.map((marca, i) => {
                        const isBMW = marca.includes('bmw')
                        const isPorsche = marca.includes('porsche')
                        const width = isBMW ? 65 : isPorsche ? 50 : 75
                        const height = isBMW ? 45 : isPorsche ? 50 : 55
                        const containerHeight = 60

                        return (
                          <div
                            key={i}
                            className="flex items-center justify-center shrink-0"
                            style={{ width: `${width}px`, height: `${containerHeight}px` }}
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

                  {/* Mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    className="sm:hidden absolute bottom-[90px] z-30 bg-white/30 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg w-full overflow-hidden max-w-[95%] left-1/2 -translate-x-1/2"
                  >
                    <div className="animate-marcas-loop flex items-center gap-4 w-max">
                      {[...slide.marcas, ...slide.marcas].map((marca, i) => {
                        const isBMW = marca.includes('bmw')
                        const isPorsche = marca.includes('porsche')
                        const width = isBMW ? 45 : isPorsche ? 40 : 55
                        const height = isBMW ? 30 : isPorsche ? 35 : 40
                        const containerHeight = 45

                        return (
                          <div
                            key={i}
                            className="flex items-center justify-center shrink-0"
                            style={{ width: `${width}px`, height: `${containerHeight}px` }}
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
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilos globales */}
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

        @media (max-width: 767px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes scrollLoop {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marcas-loop {
          animation: scrollLoop 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
