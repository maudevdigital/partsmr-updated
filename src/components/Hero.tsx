'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Montserrat } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const slides = [
  {
    tipo: 'Auto',
    fondo: '/hero-auto.jpg',
    titulo: 'Repuestos certificados para tu auto',
    subtitulo: 'Envíos express y soporte personalizado.',
    marcas: [
      { src: '/brand/car/mercedes-auto.png', width: 40, height: 35 },
      { src: '/brand/car/bmw-auto.png', width: 35, height: 30 },
      { src: '/brand/car/porsche-auto.png', width: 30, height: 30 },
      { src: '/brand/car/chevrolet-auto.png', width: 60, height: 35 },
      { src: '/brand/car/ford-auto.png', width: 60, height: 35 },
      { src: '/brand/car/volks-auto.png', width: 37, height: 35 },
      { src: '/brand/car/great-auto.png', width: 50, height: 35 },
      { src: '/brand/car/haval-auto.png', width: 60, height: 35 },
      { src: '/brand/car/chery-auto.png', width: 50, height: 35 },
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
      { src: '/brand/machinery/cat-maquina.png', width: 55, height: 35 },
      { src: '/brand/machinery/komatsu-maquina.png', width: 70, height: 35 },
      { src: '/brand/machinery/jcb-maquina.png', width: 65, height: 35 },
      { src: '/brand/machinery/bobcat-maquina.png', width: 70, height: 35 },
      { src: '/brand/machinery/doosan-maquina.png', width: 65, height: 35 },
      { src: '/brand/machinery/deere-maquina.png', width: 65, height: 35 },
      { src: '/brand/machinery/sany-maquina.png', width: 65, height: 35 },
      { src: '/brand/machinery/volvo-maquina.png', width: 45, height: 35 },
      { src: '/brand/machinery/xcmg-maquina.png', width: 65, height: 35 },
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
      { src: '/brand/truck/mercedes-camion.png', width: 40, height: 35 },
      { src: '/brand/truck/volvo-camion.png', width: 45, height: 35 },
      { src: '/brand/truck/jac-camion.png', width: 60, height: 35 },
      { src: '/brand/truck/higer-camion.png', width: 60, height: 35 },
      { src: '/brand/truck/foton-camion.png', width: 70, height: 35 },
      { src: '/brand/truck/frei-camion.png', width: 60, height: 35 },
      { src: '/brand/truck/scania-camion.png', width: 38, height: 35 },
    ],
    cta: {
      texto: 'Cotiza para tu Flota',
      href: '#contacto',
    },
  },
  {
    tipo: 'SymxAi',
    fondo: '/symx-ai.webp',
    titulo: 'Mantenimiento Predictivo y Gestión De Flotas con SYMX AI',
    subtitulo:
      'Inteligencia artificial para predecir fallas y gestión de flota. Ahorra tiempo, reduce paradas y mantén tu flota operativa.',
    marcas: [],
    cta: {
      texto: 'Ver Alianza',
      href: '/servicios#symx',
    },
  },
]
export default function Hero() {
  return (
    <section
      className={`${montserrat.className} relative w-screen h-[100vh] sm:h-[95vh] md:h-[100vh] -mt-[64px] overflow-hidden z-0`}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 9000 }}
        loop
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full flex flex-col items-center justify-center text-center overflow-hidden bg-black px-4">
              <Image
                src={slide.fondo}
                alt={`Fondo ${slide.tipo}`}
                fill
                sizes="100vw"
                priority
                className="absolute inset-0 z-0 object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-black/60 z-10" />

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

              {slide.marcas.length > 0 && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    className="hidden sm:flex absolute bottom-16 z-30 bg-white/30 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg max-w-[90%] w-auto overflow-x-auto whitespace-nowrap scrollbar-hide touch-pan-x"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      {slide.marcas.map((marca, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center shrink-0"
                          style={{ width: marca.width, height: marca.height + 10 }}
                        >
                          <Image
                            src={marca.src}
                            alt={`Marca ${i}`}
                            width={marca.width}
                            height={marca.height}
                            className="object-contain drop-shadow-md"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    className="sm:hidden absolute bottom-[90px] z-30 bg-white/30 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg w-full overflow-hidden max-w-[95%] left-1/2 -translate-x-1/2"
                  >
                    <div className="animate-marcas-loop flex items-center gap-4 w-max">
                      {[...slide.marcas, ...slide.marcas].map((marca, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center shrink-0"
                          style={{ width: marca.width, height: marca.height + 5 }}
                        >
                          <Image
                            src={marca.src}
                            alt={`Marca ${i}`}
                            width={marca.width}
                            height={marca.height}
                            className="object-contain drop-shadow-md"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.3);
          width: 8px;
          height: 8px;
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
