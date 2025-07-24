'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const slides = [
  {
    tipo: 'Auto',
    fondo: '/hero-auto.jpg',
    titulo: 'Tu auto merece repuestos certificados',
    subtitulo: 'Cotiza rápido y recibe con envío express garantizado.',
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
    cta: { texto: 'Cotiza Ahora', href: '#contacto' },
  },
  {
    tipo: 'Maquinaria',
    fondo: '/hero-maquinaria.jpg',
    titulo: 'Componentes robustos para maquinaria pesada',
    subtitulo: 'Optimiza tu operación con piezas listas para faena.',
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
    cta: { texto: 'Solicita tu Cotización', href: '#contacto' },
  },
  {
    tipo: 'Camión',
    fondo: '/hero-camion.jpg',
    titulo: 'Repuestos premium para flotas de camiones',
    subtitulo: 'Disponibilidad inmediata con cobertura nacional 24/7.',
    marcas: [
      { src: '/brand/truck/mercedes-camion.png', width: 40, height: 35 },
      { src: '/brand/truck/volvo-camion.png', width: 45, height: 35 },
      { src: '/brand/truck/jac-camion.png', width: 60, height: 35 },
      { src: '/brand/truck/higer-camion.png', width: 60, height: 35 },
      { src: '/brand/truck/foton-camion.png', width: 70, height: 35 },
      { src: '/brand/truck/frei-camion.png', width: 60, height: 35 },
      { src: '/brand/truck/scania-camion.png', width: 38, height: 35 },
    ],
    cta: { texto: 'Cotiza para tu Flota', href: '#contacto' },
  },
  {
    tipo: 'SymxAi',
    fondo: '/symx-ai.webp',
    titulo: 'Flotas inteligentes con SYMX AI',
    subtitulo:
      'Predice fallas, reduce detenciones y optimiza tu mantenimiento con inteligencia artificial.',
    marcas: [],
    cta: { texto: 'Ver Alianza', href: '/servicios#symx' },
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animateMarcas, setAnimateMarcas] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 9000)
    return () => clearInterval(timer)
  }, [])

  const handleScrollPause = () => {
    setAnimateMarcas(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setAnimateMarcas(true)
    }, 1000)
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  return (
    <section
      className={`${montserrat.className} relative w-screen h-[100vh] sm:h-[95vh] md:h-[100vh] -mt-[64px] overflow-hidden z-0`}
    >
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.fondo}
            alt={`Fondo ${slide.tipo}`}
            fill
            priority
            className={`object-cover object-center brightness-[0.5] transition-opacity duration-1000 ${
              index === current ? 'opacity-100 z-0' : 'opacity-0 absolute'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/30 hover:text-white/50 transition"
        aria-label="Anterior"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/30 hover:text-white/50 transition"
        aria-label="Siguiente"
      >
        <ChevronRight size={20} />
      </button>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <motion.div
          key={slides[current].tipo}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight mb-2 drop-shadow-lg">
            {slides[current].titulo}
          </h1>
          <p className="text-xs sm:text-sm md:text-lg mb-4 text-gray-300 drop-shadow">
            {slides[current].subtitulo}
          </p>
          <Link
            href={slides[current].cta.href}
            className="inline-block mb-8 text-sm sm:text-base md:text-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg transition"
          >
            {slides[current].cta.texto}
          </Link>
        </motion.div>
        {slides[current].marcas.length > 0 && (
          <div className="absolute bottom-32 sm:bottom-24 z-30 w-full flex flex-col items-center px-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-xs sm:text-sm font-medium mb-2 opacity-80"
            >
              Marcas con las que trabajamos
            </motion.p>

            {/* Desktop fijo */}
            <div className="hidden sm:block bg-white/30 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg max-w-[95%] overflow-x-auto scrollbar-hide">
              <div className="flex items-center gap-6 w-max">
                {slides[current].marcas.map((marca, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: marca.width,
                      height: marca.height + 10,
                    }}
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
            </div>

            {/* Mobile animado + scroll + loop */}
            <div
              className="sm:hidden bg-white/30 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg max-w-[95%] overflow-x-auto scrollbar-hide"
              onTouchStart={handleScrollPause}
              onScroll={handleScrollPause}
            >
              <div
                className={`flex gap-6 w-max transition-transform duration-1000 ease-linear ${
                  animateMarcas ? 'animate-marcas-loop' : ''
                }`}
              >
                {[...slides[current].marcas, ...slides[current].marcas].map(
                  (marca, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: marca.width,
                        height: marca.height + 10,
                      }}
                    >
                      <Image
                        src={marca.src}
                        alt={`Marca ${i}`}
                        width={marca.width}
                        height={marca.height}
                        className="object-contain drop-shadow-md"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes scrollLoop {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marcas-loop {
          animation: scrollLoop 45s linear infinite;
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
