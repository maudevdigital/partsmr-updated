'use client'

import Breadcrumbs from '../../../components/Breadcrumbs'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const repuestosPopulares = [
  {
    nombre: 'Filtro de aire Caterpillar',
    descripcion: 'Compatible con excavadoras y cargadores frontales.',
    imagen: '/repuestos/filtro-aire.jpg',
  },
  {
    nombre: 'Bomba hidráulica Komatsu',
    descripcion: 'Rendimiento garantizado para equipos de alto tonelaje.',
    imagen: '/repuestos/bomba-hidraulica.png',
  },
  {
    nombre: 'Cadena para excavadora Liebherr',
    descripcion: 'Alta resistencia para faenas de movimiento de tierra.',
    imagen: '/repuestos/cadena-excavadora.jpg',
  },
  {
    nombre: 'Motor de giro John Deere',
    descripcion: 'Original y con garantía de fábrica.',
    imagen: '/repuestos/motor-giro.png',
  },
  {
    nombre: 'Cilindro hidráulico Volvo CE',
    descripcion: 'Alta presión y sellos reforzados para uso intensivo.',
    imagen: '/repuestos/cilindro-hidraulico.png',
  },
  {
    nombre: 'Radiador para bulldozer CAT',
    descripcion: 'Excelente rendimiento térmico en climas extremos.',
    imagen: '/repuestos/radiador-bulldozer.png',
  },
]

export default function MaquinariaPage() {
  return (
    <main className="bg-[#f9fafb] font-montserrat text-[#0f172a]">
      <section className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs />

        <h1 className="text-4xl font-bold mb-4">Repuestos para Maquinaria Pesada</h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-10">
          Encuentra los repuestos más demandados para mantener tu maquinaria operando al más alto rendimiento. Trabajamos con marcas líderes y componentes de alta durabilidad.
        </p>

        {/* Repuestos populares */}
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {repuestosPopulares.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-zinc-200 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-full h-70 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1 text-[#0f172a]">
                  {item.nombre}
                </h3>
                <p className="text-gray-600 text-sm">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nota imágenes referenciales */}
        <p className="text-sm text-gray-500 mb-10">
          *Las imágenes mostradas son referenciales y podrían variar del producto real.
        </p>

        {/* CTA WhatsApp */}
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl shadow flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-[#0f172a] mb-1">¿Necesitas cotizar alguno de estos repuestos?</h2>
            <p className="text-gray-700 text-sm">
              Contáctanos por WhatsApp y te ayudamos a encontrar la mejor solución para tu maquinaria.
            </p>
          </div>
          <Link
            href="https://wa.me/56928423774?text=Hola%20PartsMR%2C%20necesito%20cotizar%20repuestos%20para%20maquinaria%20pesada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition shadow"
          >
            <FaWhatsapp className="w-5 h-5" />
            Cotizar por WhatsApp
          </Link>
        </div>
      </section>
    </main>
  )
}
