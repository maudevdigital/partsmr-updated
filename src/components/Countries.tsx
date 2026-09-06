'use client'

import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Globe2 } from 'lucide-react'
import { PAISES } from '../lib/constants'
import 'swiper/css'
import 'swiper/css/free-mode'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700'] })

// Que aporta cada mercado. Los nombres y banderas vienen de constants, que es
// la fuente unica; aqui solo vive el texto comercial de cada uno.
const DETALLE: Record<string, string> = {
  CL: 'Despacho a todo el país, con entrega en Santiago y regiones.',
  PE: 'Especialistas en equipos de minería y construcción.',
  BO: 'Cobertura completa con repuestos garantizados.',
  AR: 'Entrega rápida y asesoría técnica incluida.',
  PY: 'Cobertura para flotas de transporte y maquinaria.',
  US: 'Abastecimiento directo desde proveedores en origen.',
}

export default function Countries() {
  // El carrusel se duplica para que el bucle sea continuo: con seis tarjetas y
  // hasta 4.5 visibles, Swiper no tiene material suficiente para encadenar el
  // loop sin saltos.
  const paises = [...PAISES, ...PAISES]

  return (
    <section className={`bg-[#f9fafb] py-20 ${montserrat.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Globe2 className="text-[#c2410c] w-6 h-6" />
          <p className="text-[#c2410c] font-bold text-sm uppercase tracking-wide">
            Cobertura Internacional
          </p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
          Presencia en <span className="text-[#c2410c]">Latinoamérica y EE.UU.</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Despachamos repuestos a seis países, con asesoría técnica en cada mercado.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 bg-[#fff4e6] border border-[#ffd9a8] rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-[#ff8a00] rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-700">
            {PAISES.length} países cubiertos
          </span>
        </div>
      </div>

      {/* Degradados a los lados: el carrusel entra y sale en vez de cortarse
          de golpe contra el borde. */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-[#f9fafb] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-[#f9fafb] to-transparent" />

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.4 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
          }}
          spaceBetween={20}
          loop
          // freeMode + easing lineal convierten el carrusel en un
          // desplazamiento continuo. Sin esto Swiper aplica su curva por
          // defecto y el movimiento avanza a tirones entre tarjeta y tarjeta.
          freeMode={{ enabled: true, momentum: false }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={6000}
          allowTouchMove
          className="!px-4 sm:!px-8 md:!px-16 [&_.swiper-wrapper]:!ease-linear"
        >
          {paises.map((pais, index) => (
            // h-auto en el slide permite que la tarjeta se estire; sin esto
            // Swiper fija la altura al contenido y cada tarjeta quedaba de un
            // alto distinto segun el largo de su texto.
            <SwiperSlide key={`${pais.code}-${index}`} className="!h-auto">
              <article className="h-full flex flex-col items-center text-center bg-white border border-gray-200 hover:border-[#ff8a00] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 px-6 py-7">
                <div className="mb-4 flex justify-center items-center h-11">
                  <Image
                    src={pais.flag}
                    alt={`Bandera de ${pais.name}`}
                    width={64}
                    height={42}
                    className="rounded shadow-sm object-contain max-h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a]">{pais.name}</h3>
                <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                  {DETALLE[pais.code]}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
