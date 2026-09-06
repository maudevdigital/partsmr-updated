'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { Montserrat } from 'next/font/google'

import { FAQS as faqs } from '../data/faqs'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})


export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className={`${montserrat.className} w-full bg-[#f9fafb] py-20 px-6 sm:px-10 md:px-16`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start"
      >
        {/* Título */}
        <div className="text-left space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#FF8A00]" />
            <p className="text-[#FF8A00] text-sm font-bold uppercase tracking-wide">
              Respuestas a Preguntas Comunes
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-tight">
            Preguntas Frecuentes Sobre Repuestos
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
            Aclara tus dudas antes de cotizar. Si no encuentras tu respuesta aquí, escríbenos y te contactamos.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-[#FF8A00] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Respuesta en menos de 24 horas hábiles</span>
          </div>
        </div>

        {/* Lista de FAQs */}
        <div className="space-y-4 w-full">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-semibold text-[#111827] pr-4">
                  {faq.pregunta}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-[#FF8A00] w-5 h-5" />
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
                    <div className="px-5 pb-5 pt-1 text-gray-700 text-sm sm:text-base leading-relaxed bg-gray-50">
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
