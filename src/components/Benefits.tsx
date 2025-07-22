'use client'

import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Beneficios() {
  const beneficios = [
    {
      texto: 'Realizamos despachos internacionales con logística confiable',
    },
    {
      texto: 'Ahorra tiempo solicitando tus repuestos online, los enviamos a tu región',
    },
    {
      texto: 'Te asistimos y cotizamos tu requerimiento de forma rápida',
    },
  ]

  return (
    <section className="bg-[#f9fafb] py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight mb-4">
          ¿Por qué elegir <span className="text-[#FF8A00]">PartsMR</span>?
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Descubre los beneficios clave que ofrecemos para que recibas tus repuestos más rápido.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {beneficios.map((b, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-[#e2e8f0] text-[#0f172a] rounded-full shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <p className="text-gray-800 text-base sm:text-lg font-medium">
              {b.texto}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
