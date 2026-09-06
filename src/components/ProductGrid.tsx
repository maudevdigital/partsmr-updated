'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Truck, Car, Wrench, Package } from 'lucide-react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const productos = [
  {
    title: 'Neumáticos Especializados',
    description: 'Neumáticos de alta calidad, diseñados para rendimiento óptimo en diversas condiciones.',
    image: '/grid/neumatico.webp',
  },
  {
    title: 'Sistemas de transmisión',
    description: 'Discos de fricción duraderos que garantizan un rendimiento confiable.',
    image: '/grid/transmision.webp',
  },
  {
    title: 'Motor y piezas de motor',
    description: 'Kit completo para el mantenimiento y reparación de motores.',
    image: '/grid/motor.webp',
  },
  {
    title: 'Filtros',
    description: 'Filtros de aceite premium que garantizan la limpieza del motor.',
    image: '/grid/filtros.webp',
  },
  {
    title: 'Sistemas de freno',
    description: 'Sistemas de freno confiables para una detención segura.',
    image: '/grid/frenos.webp',
  },
]

const etiquetas = [
  { label: 'Autos', icon: <Car className="w-4 h-4 mr-1" /> },
  { label: 'Maquinaria', icon: <Wrench className="w-4 h-4 mr-1" /> },
  { label: 'Camiones', icon: <Truck className="w-4 h-4 mr-1" /> },
]

export default function ProductGrid() {
  return (
    <section className={`${montserrat.className} bg-white py-20 px-4 sm:px-8 md:px-16 text-[#111827]`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Package className="w-5 h-5 text-[#FF8A00]" />
          <p className="text-center text-sm font-bold text-[#FF8A00] uppercase tracking-wide">
            Listos para Envío
          </p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 leading-snug">
          Motor, transmisión, frenos y filtros
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto text-center mb-12">
Culatas, pistones, empaquetaduras y kits de reparación, además de los componentes de mayor rotación en cada tipo de equipo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
            >
              <div className="relative w-full h-52">
                <Image
                  src={prod.image}
                  alt={prod.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-[#1f2937] mb-2">{prod.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{prod.description}</p>
              </div>

              <div className="px-5 py-4 bg-white flex flex-wrap gap-2">
                {etiquetas.map((etiqueta, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-xs px-3 py-1.5 rounded-full border border-orange-200 text-gray-700 bg-orange-50 hover:bg-orange-100 transition-all duration-200"
                  >
                    <span className="text-[#FF8A00]">{etiqueta.icon}</span>
                    <span className="capitalize font-medium">{etiqueta.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
