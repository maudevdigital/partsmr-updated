'use client'

import { Globe2, Clock3, HeadsetIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function Beneficios() {
  const beneficios = [
    {
      icon: Globe2,
      titulo: 'Envíos Internacionales',
      texto: 'Realizamos despachos internacionales con logística confiable',
      color: 'bg-orange-100 text-[#FF8A00]'
    },
    {
      icon: Clock3,
      titulo: 'Ahorra Tiempo',
      texto: 'Ahorra tiempo solicitando tus repuestos online, los enviamos a tu región',
      color: 'bg-orange-100 text-[#FF8A00]'
    },
    {
      icon: HeadsetIcon,
      titulo: 'Atención Rápida',
      texto: 'Te asistimos y cotizamos tu requerimiento de forma rápida',
      color: 'bg-orange-100 text-[#FF8A00]'
    },
  ]

  return (
    <section className={`${montserrat.className} bg-[#f9fafb] py-20 px-4 sm:px-8 md:px-12 lg:px-20`}>
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-2 h-2 bg-[#FF8A00] rounded-full"></div>
          <p className="text-[#FF8A00] font-bold text-sm uppercase tracking-wide">Ventajas Competitivas</p>
        </div>
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
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className={`flex h-14 w-14 items-center justify-center ${b.color} rounded-full shrink-0`}>
              <b.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{b.titulo}</h3>
            <p className="text-gray-600 text-base">
              {b.texto}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
