'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const reviews = [
  {
    nombre: 'Carlos M.',
    empresa: 'Transportes del Norte',
    pais: 'Chile',
    comentario: 'Excelente atención y rapidez en el despacho. Encontré justo el repuesto que necesitaba para mi retroexcavadora.',
    rating: 5,
  },
  {
    nombre: 'Lucía G.',
    empresa: 'Logística Sur',
    pais: 'Perú',
    comentario: 'Muy buena experiencia. Me ayudaron incluso a cotizar piezas difíciles de conseguir para mi camión.',
    rating: 5,
  },
  {
    nombre: 'Andrés P.',
    empresa: 'Construcciones AP',
    pais: 'Paraguay',
    comentario: 'Servicio confiable y comunicación clara. Lo recomiendo totalmente.',
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section
      className={`${montserrat.className} w-full bg-white py-20 px-6 md:px-10`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center space-y-10"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-3">
            Opiniones de Nuestros Clientes
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <span className="font-semibold">5.0</span>
            <span>•</span>
            <span>Basado en testimonios verificados</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-left space-y-4 border border-gray-100"
            >
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill={i < review.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base italic">
                "{review.comentario}"
              </p>
              <div className="border-t pt-3">
                <div className="text-sm font-bold text-[#0f172a]">
                  {review.nombre}
                </div>
                <div className="text-xs text-gray-500">
                  {review.empresa} • {review.pais}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
