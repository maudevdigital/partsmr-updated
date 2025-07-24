'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

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
    respuesta:
      'Ofrecemos repuestos para camiones, automóviles y maquinaria diversa, garantizando una amplia selección para todas las necesidades.',
  },
  {
    pregunta: '¿Ofrecen opciones de envío internacional?',
    respuesta:
      'Sí, hacemos envíos internacionales. Consulta a nuestros ejecutivos las políticas de envío para tiempos de entrega y países disponibles.',
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta:
      'Aceptamos tarjetas de crédito, débito y PayPal. Todos los pagos se procesan de manera segura en nuestra plataforma.',
  },
  {
    pregunta: '¿Puedo devolver repuestos si es necesario?',
    respuesta:
      'Sí, tenemos una política de devoluciones de 30 días. Los repuestos deben estar en condiciones originales para reembolso.',
  },
  {
    pregunta: '¿Cómo puedo contactar servicio al cliente?',
    respuesta:
      'Puedes contactarnos por teléfono, correo electrónico o chat en vivo. Estamos aquí para ayudarte 24/7.',
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-[#f9fafb] py-20 px-6 sm:px-10 md:px-16" style={montserrat}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start"
      >
        {/* Título */}
        <div className="text-left space-y-4">
          <p className="text-[#f97316] text-sm font-semibold uppercase tracking-wide">
            Respuestas a Preguntas Comunes
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] leading-tight">
            Preguntas Frecuentes Sobre <br /> Repuestos
          </h2>
          <p className="text-[#4B5563] mt-4 text-base">
            Aclara tus dudas antes de hacer tu compra. Nuestro equipo está siempre disponible para ayudarte.
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="space-y-4 w-full">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#f9fafb] rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <h3 className="text-base sm:text-lg font-semibold text-[#111827]">
                  {faq.pregunta}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-[#f97316] w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    key="respuesta"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 text-gray-700 text-sm sm:text-base leading-relaxed">
                      {faq.respuesta}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
