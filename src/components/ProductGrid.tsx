'use client'

import Image from 'next/image'

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
    <section className="bg-[#f9fafb] py-16 px-4 sm:px-8 md:px-16 text-[#171717]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold text-[#FF8A00] mb-2">Listos para Envío</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">
          Miles de Repuestos en un solo <br className="sm:hidden" />
          lugar
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((prod, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <div className="relative w-full h-52">
                <Image
                  src={prod.image}
                  alt={prod.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-[#111827] text-white px-5 py-4">
                <h3 className="text-lg font-semibold mb-1">{prod.title}</h3>
                <p className="text-sm opacity-80">{prod.description}</p>
              </div>
              <div className="px-5 py-4 bg-white border-t">
                <button className="w-full bg-[#FF8A00] hover:bg-[#e67e00] text-white text-sm font-semibold py-2 px-4 rounded-md transition">
                  Cotiza ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
