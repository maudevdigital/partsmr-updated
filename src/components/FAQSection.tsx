'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

const montserrat = {
  fontFamily: `'Montserrat', sans-serif`,
}

const faqs = [
  {
    pregunta: '¿Cómo hago un pedido?',
    respuesta: 'Simplemente solicita tu cotización por whatsapp o email.',
  },
  {
    pregunta: '¿Para qué vehículos ofrecen repuestos?',
    respuesta: 'Ofrecemos repuestos para camiones, automóviles y maquinaria diversa, garantizando una amplia selección para todas las necesidades.',
  },
  {
    pregunta: '¿Ofrecen opciones de envío internacional?',
    respuesta: 'Sí, hacemos envíos internacionales. Consulta a nuestros ejecutivos las políticas de envío para tiempos de entrega y países disponibles.',
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta: 'Aceptamos tarjetas de crédito, débito y PayPal. Todos los pagos se procesan de manera segura en nuestra plataforma.',
  },
  {
    pregunta: '¿Puedo devolver repuestos si es necesario?',
    respuesta: 'Sí, tenemos una política de devoluciones de 30 días. Los repuestos deben estar en condiciones originales para reembolso.',
  },
  {
    pregunta: '¿Cómo puedo contactar servicio al cliente?',
    respuesta: 'Puedes contactarnos por teléfono, correo electrónico o chat en vivo. Estamos aquí para ayudarte 24/7.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative w-full text-white" style={montserrat}>
      {/* Fondo principal */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/faq-bg.webp"
          alt="FAQ Background"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.4]"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 px-6 md:px-16 py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Título y mapa */}
        <div className="text-left space-y-4">
          <p className="text-orange-500 text-sm font-semibold">Respuestas a Preguntas Comunes</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Preguntas Frecuentes Sobre <br /> Repuestos
          </h2>

          <div className="mt-6">
            <Image
              src="/mapa.webp"
              alt="Mapa del mundo"
              width={500}
              height={300}
              className="w-full max-w-md md:max-w-lg lg:max-w-xl"
              priority
            />
          </div>
        </div>

        {/* Acordeón con animación fluida */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={clsx(
                  'rounded-xl overflow-hidden bg-white text-black transition-shadow duration-300',
                  isOpen ? 'shadow-lg' : 'shadow-sm'
                )}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={clsx(
                    'w-full flex justify-between items-center px-6 py-4 font-semibold text-left text-base sm:text-lg transition-colors duration-200',
                    isOpen ? 'bg-[#f97316] text-white' : 'bg-gray-100 hover:bg-gray-200 text-[#171717]'
                  )}
                >
                  {item.pregunta}
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, maxHeight: 0 }}
                      animate={{ opacity: 1, maxHeight: 500 }}
                      exit={{ opacity: 0, maxHeight: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pt-2 pb-4 text-sm sm:text-base">
                        {item.respuesta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
