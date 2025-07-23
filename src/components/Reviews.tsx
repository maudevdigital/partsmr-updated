'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const montserrat = {
  fontFamily: `'Montserrat', sans-serif`,
}

const reviews = [
  {
    nombre: 'Carlos M.',
    pais: 'Chile',
    comentario: 'Excelente atención y rapidez en el despacho. Encontré justo el repuesto que necesitaba para mi retroexcavadora.',
    rating: 5,
  },
  {
    nombre: 'Lucía G.',
    pais: 'Perú',
    comentario: 'Muy buena experiencia. Me ayudaron incluso a cotizar piezas difíciles de conseguir para mi camión.',
    rating: 4,
  },
  {
    nombre: 'Andrés P.',
    pais: 'Paraguay',
    comentario: 'Servicio confiable y comunicación clara. Lo recomiendo totalmente.',
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section
      className="w-full bg-[#f9fafb] py-20 px-6 md:px-10"
      style={montserrat}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center space-y-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
          Opiniones de Nuestros Clientes
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 text-left space-y-4"
            >
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill={i < review.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                “{review.comentario}”
              </p>
              <div className="text-sm font-semibold text-[#1e3a8a]">
                {review.nombre} — {review.pais}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
