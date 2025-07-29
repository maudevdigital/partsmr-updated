'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function TechnicianShowcase() {
  const technicians = [
    { src: '/personajes/personaje1.png', width: 250, height: 250, zIndex: 10 },
    { src: '/personajes/personaje2.png', width: 330, height: 330, zIndex: 20 },
    { src: '/personajes/personaje3.png', width: 400, height: 400, zIndex: 50 },
    { src: '/personajes/personaje4.png', width: 330, height: 330, zIndex: 20 },
    { src: '/personajes/personaje5.png', width: 250, height: 250, zIndex: 10 },
  ]

  return (
    <section className="relative w-full h-[420px] sm:h-[500px] bg-gradient-to-br from-[#0f172a] via-[#172554] to-[#1e3a8a] text-white font-montserrat overflow-hidden">
      {/* Fondo */}
      <Image
        src="/fondo-maquinarias.jpg"
        alt="Fondo de maquinaria"
        fill
        priority
        className="object-cover object-center absolute inset-0 z-0 opacity-40"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Texto superior */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-40 pt-3 sm:pt-6 px-4 md:px-10 text-center"
      >
        <h2 className="text-xl md:text-3xl font-bold leading-tight max-w-3xl mx-auto">
          Taller técnico profesional disponible para tu flota.
        </h2> 
      </motion.div>

      {/* Técnicos superpuestos */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex justify-center items-end -space-x-24 md:-space-x-36">
        {technicians.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
            style={{
              height: `${tech.height}px`,
              width: `${tech.width}px`,
              zIndex: tech.zIndex,
            }}
          >
            <Image
              src={tech.src}
              alt={`Técnico ${index + 1}`}
              fill
              className="object-bottom object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
