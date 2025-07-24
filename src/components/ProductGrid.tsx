'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Truck, Car, Wrench } from 'lucide-react'

const montserrat = {
  fontFamily: `'Montserrat', sans-serif`,
}

const products = [
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
  { label: 'autos', icon: <Car className="w-4 h-4 mr-1" /> },
  { label: 'maquinaria', icon: <Wrench className="w-4 h-4 mr-1" /> },
  { label: 'camiones', icon: <Truck className="w-4 h-4 mr-1" /> },
]

export default function ProductGrid() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-16 text-[#111827]" style={montserrat}>
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold text-[#FF8A00] mb-2 uppercase tracking-wide">
          Listos para Envío
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 leading-snug">
          Miles de Repuestos en un solo <br className="sm:hidden" />
          lugar
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
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

              <div className="px-5 py-4 bg-gray-50">
                <h3 className="text-lg font-semibold text-[#1f2937] mb-1">{prod.title}</h3>
                <p className="text-sm text-gray-600">{prod.description}</p>
              </div>

              <div className="px-5 py-4 bg-white flex flex-wrap gap-2">
                {etiquetas.map((etiqueta, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-sm px-3 py-1.5 rounded-full border border-gray-300 text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
                  >
                    {etiqueta.icon}
                    <span className="capitalize">Repuestos para {etiqueta.label}</span>
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
