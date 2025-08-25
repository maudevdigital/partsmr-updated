'use client'

import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '../../components/Breadcrumbs'
import { FaWhatsapp } from 'react-icons/fa'

type Categoria = {
  nombre: string
  imagen: string
  href: string
  descripcion: string
}

const categories: Categoria[] = [
  {
    nombre: 'Repuestos para Maquinaria Pesada',
    imagen: '/product-categories/maquinaria.webp',
    href: '/repuestos/maquinaria',
    descripcion:
      'Componentes para excavadoras, retroexcavadoras, bulldozers, grúas, cargadores frontales y más. Disponibilidad para marcas como Caterpillar, Komatsu y Volvo.',
  },
  {
    nombre: 'Repuestos para Autos y Camionetas',
    imagen: '/product-categories/autos.webp',
    href: '/repuestos/autos',
    descripcion:
      'Filtros, pastillas de freno, baterías, amortiguadores y más para autos, SUV y camionetas. Trabajamos con Bosch, Monroe, Brembo y otras marcas.',
  },
  {
    nombre: 'Repuestos para Camiones',
    imagen: '/product-categories/camiones.webp',
    href: '/repuestos/camiones',
    descripcion:
      'Soluciones para sistemas de freno, embrague, motor y refrigeración de camiones de carga. Repuestos para flotas y transporte pesado.',
  },
]

export default function RepuestosPage() {
  return (
    <main className="bg-[#f9fafb] font-montserrat text-[#0f172a]">
      <section className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs />

        <h1 className="text-4xl font-bold mb-4">Nuestros Repuestos</h1>
        <p className="text-lg text-gray-700 max-w-3xl mb-10">
          Contamos con un amplio stock de repuestos originales y alternativos para maquinaria pesada, autos, camionetas y camiones. Enviamos a todo Chile y Latinoamérica, y asesoramos técnicamente en cada compra.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, i) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="bg-white border border-zinc-200 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden group"
            >
              {/* Contenedor para mantener proporción estable y permitir fill */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={cat.imagen}
                  alt={cat.nombre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  priority={i < 2} // prioriza las 2 primeras
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 border-l-4 border-orange-500 pl-3">
                  {cat.nombre}
                </h2>
                <p className="text-gray-600 text-sm">{cat.descripcion}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl shadow flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-[#0f172a] mb-1">
              ¿No encuentras el repuesto que necesitas?
            </h2>
            <p className="text-gray-700 text-sm">
              Contáctanos por WhatsApp y uno de nuestros asesores te ayudará a ubicarlo o cotizarlo.
            </p>
          </div>
          <Link
            href="https://wa.me/56928423774?text=Hola%20PartsMR%2C%20estoy%20buscando%20un%20repuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition shadow"
          >
            <FaWhatsapp className="w-6 h-6" />
            Escríbenos por WhatsApp
          </Link>
        </div>
      </section>
    </main>
  )
}
