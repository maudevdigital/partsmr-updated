'use client'

import Image from 'next/image'

export default function ServicesSection() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px] flex items-center justify-center overflow-hidden bg-black">
      {/* Imagen de fondo */}
      <Image
        src="/services/maquinaria-bg.jpg"
        alt="Servicios maquinaria"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center opacity-60"
      />

      {/* Overlay de contenido */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
          Servicios para Maquinaria
        </h2>
        <p className="text-white text-base sm:text-lg max-w-xl mx-auto mb-6 font-medium leading-relaxed drop-shadow">
          Ofrecemos transporte, desmontaje y montaje para maquinaria de movimiento de tierra, asegurando eficiencia y seguridad en cada operación.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-200"
        >
          Contáctanos
        </a>
      </div>
    </section>
  )
}
