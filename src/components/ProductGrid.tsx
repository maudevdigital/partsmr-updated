'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

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

export default function ProductGrid() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-16 text-[#111827] font-montserrat">
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
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
              <div className="px-5 py-4 bg-white">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2.5 rounded-md transition duration-200">
                  Cotiza ahora
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
