import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { ArrowRight, Layers } from 'lucide-react'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

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
    <section className={`${montserrat.className} bg-[#f9fafb] py-20 px-4 sm:px-8 md:px-16`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Layers className="w-5 h-5 text-[#FF8A00]" />
            <p className="text-[#FF8A00] font-bold text-sm uppercase tracking-wide">Categorías de Productos</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Repuestos para Todas tus <span className="text-[#FF8A00]">Máquinas</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Vendemos repuestos de calidad para camiones, máquinas y autos.
            Nuestros precios son competitivos y ofrecemos piezas difíciles de encontrar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={cat.href}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group bg-white border border-gray-100 hover:border-orange-200"
            >
              <div className="relative w-full h-64">
                <Image
                  src={cat.imagen}
                  alt={cat.nombre}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg group-hover:bg-white transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 border-l-4 border-[#FF8A00] pl-3">
                      {cat.nombre}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-[#FF8A00] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
