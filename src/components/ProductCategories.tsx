'use client'

import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    nombre: 'Repuestos para Maquinaria',
    imagen: '/product-categories/maquinaria.webp',
    href: '/repuestos/maquinaria',
  },
  {
    nombre: 'Repuestos para Autos',
    imagen: '/product-categories/autos.webp',
    href: '/repuestos/autos',
  },
  {
    nombre: 'Repuestos para Camiones',
    imagen: '/product-categories/camiones.webp',
    href: '/repuestos/camiones',
  },
]

export default function ProductCategories() {
  return (
    <section className="bg-[#f9fafb] py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Repuestos para Todas tus Máquinas
          </h2>
          <p className="text-gray-600 text-base max-w-xl mt-4 md:mt-0">
            Vendemos repuestos de calidad para camiones, máquinas y autos.
            Nuestros precios son competitivos y ofrecemos piezas difíciles de encontrar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={cat.href}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group bg-white"
            >
              <Image
                src={cat.imagen}
                alt={cat.nombre}
                width={500}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 border-l-4 border-[#FF8A00] pl-3">
                  {cat.nombre}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
