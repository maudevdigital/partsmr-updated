'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const slides = [
  {
    tipo: 'Maquinaria',
    fondo: '/hero/hero-maquinaria.webp',
    titulo: 'Repuestos para maquinaria pesada',
    subtitulo: 'Motores, culatas y cadenas de oruga para excavadoras, cargadores y bulldozers.',
    marcas: [
      { src: '/brand/machinery/cat-maquina.webp', nombre: 'Caterpillar', width: 55, height: 35 },
      { src: '/brand/machinery/komatsu-maquina.webp', nombre: 'Komatsu', width: 70, height: 35 },
      { src: '/brand/machinery/deere-maquina.webp', nombre: 'John Deere', width: 45, height: 35 },
      { src: '/brand/machinery/jcb-maquina.webp', nombre: 'JCB', width: 50, height: 35 },
      { src: '/brand/machinery/volvo-maquina.webp', nombre: 'Volvo', width: 50, height: 35 },
      { src: '/brand/vector/hitachi.svg', nombre: 'Hitachi', width: 44, height: 28 },
      { src: '/brand/vector/liebherr.svg', nombre: 'Liebherr', width: 48, height: 28 },
      { src: '/brand/machinery/bobcat-maquina.webp', nombre: 'Bobcat', width: 55, height: 35 },
    ],
    cta: { texto: 'Solicita tu Cotización', href: '#contacto' },
  },
  {
    tipo: 'Camión',
    fondo: '/hero/hero-camion.webp',
    titulo: 'Repuestos para camiones de carga',
    subtitulo: 'Turbos, embragues, radiadores y línea de motor para flotas de transporte.',
    marcas: [
      { src: '/brand/truck/mercedes-camion.webp', nombre: 'Mercedes-Benz', width: 40, height: 35 },
      { src: '/brand/truck/volvo-camion.webp', nombre: 'Volvo', width: 50, height: 35 },
      { src: '/brand/truck/scania-camion.webp', nombre: 'Scania', width: 50, height: 35 },
      { src: '/brand/truck/frei-camion.webp', nombre: 'Freightliner', width: 55, height: 35 },
      { src: '/brand/vector/man.svg', nombre: 'MAN', width: 38, height: 28 },
      { src: '/brand/vector/iveco.svg', nombre: 'Iveco', width: 42, height: 28 },
      { src: '/brand/vector/hino.svg', nombre: 'Hino', width: 38, height: 28 },
      { src: '/brand/vector/daf.svg', nombre: 'DAF', width: 38, height: 28 },
    ],
    cta: { texto: 'Cotiza para tu Flota', href: '#contacto' },
  },
  {
    tipo: 'Auto',
    fondo: '/hero/hero-auto.webp',
    titulo: 'Repuestos para autos y camionetas',
    subtitulo: 'Línea de motor completa: culatas, pistones, empaquetaduras y kits de reparación.',
    marcas: [
      { src: '/brand/car/mercedes-auto.webp', nombre: 'Mercedes-Benz', width: 40, height: 35 },
      { src: '/brand/car/bmw-auto.webp', nombre: 'BMW', width: 35, height: 30 },
      { src: '/brand/vector/audi.svg', nombre: 'Audi', width: 42, height: 28 },
      { src: '/brand/car/porsche-auto.webp', nombre: 'Porsche', width: 30, height: 30 },
      { src: '/brand/vector/toyota.svg', nombre: 'Toyota', width: 36, height: 30 },
      { src: '/brand/car/chevrolet-auto.webp', nombre: 'Chevrolet', width: 60, height: 35 },
      { src: '/brand/car/ford-auto.webp', nombre: 'Ford', width: 60, height: 35 },
      { src: '/brand/car/volks-auto.webp', nombre: 'Volkswagen', width: 37, height: 35 },
    ],
    cta: { texto: 'Cotiza Ahora', href: '#contacto' },
  },
  {
    tipo: 'SymxAi',
    fondo: '/hero/symx-ai.webp',
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
      className={`${montserrat.className} relative w-screen h-[85vh] min-h-[520px] lg:h-[calc(100vh-4rem)] lg:min-h-[600px] overflow-hidden z-0`}
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
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].tipo}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl"
          >
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight mb-2 drop-shadow-lg">
              {slides[current].titulo}
            </h1>
            <p className="text-xs sm:text-sm md:text-lg mb-4 text-white/90 drop-shadow-md">
              {slides[current].subtitulo}
            </p>
            <Link
              href={slides[current].cta.href}
              className="inline-block mb-8 text-sm sm:text-base md:text-lg bg-[#ff8a00] hover:bg-[#e67a00] text-[#0f172a] font-semibold px-5 py-2 rounded-lg transition"
            >
              {slides[current].cta.texto}
            </Link>
          </motion.div>
        </AnimatePresence>

        {slides[current].marcas.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`marcas-${slides[current].tipo}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-32 sm:bottom-24 z-30 w-full flex flex-col items-center px-4"
            >
              <p className="text-white text-xs sm:text-sm font-medium mb-2 opacity-80">
                Marcas con las que trabajamos
              </p>

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
                      {/* Los SVG van con <img>: next/image los bloquea salvo
                          que se active dangerouslyAllowSVG. */}
                      {marca.src.endsWith('.svg') ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={marca.src}
                          alt={`Repuestos para ${marca.nombre}`}
                          width={marca.width}
                          height={marca.height}
                          className="object-contain"
                        />
                      ) : (
                      <Image
                        src={marca.src}
                        alt={`Repuestos para ${marca.nombre}`}
                        width={marca.width}
                        height={marca.height}
                        className="object-contain drop-shadow-md"
                      />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile loop infinito */}
              <div
                className="sm:hidden bg-white/30 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg max-w-[95%] overflow-hidden"
                onTouchStart={handleScrollPause}
                onScroll={handleScrollPause}
              >
                <div className="relative w-full overflow-hidden">
                  <div
                    className={`flex gap-6 w-max animate-marcas-loop ${
                      !animateMarcas ? 'paused' : ''
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
                          {marca.src.endsWith('.svg') ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={marca.src}
                              alt={`Repuestos para ${marca.nombre}`}
                              width={marca.width}
                              height={marca.height}
                              className="object-contain"
                            />
                          ) : (
                            <Image
                              src={marca.src}
                              alt={`Repuestos para ${marca.nombre}`}
                              width={marca.width}
                              height={marca.height}
                              className="object-contain drop-shadow-md"
                            />
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
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

        .paused {
          animation-play-state: paused !important;
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
