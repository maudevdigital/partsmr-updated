'use client'

import Breadcrumbs from '../../../components/Breadcrumbs'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const repuestosAutos = [
  {
    nombre: 'Filtro de aceite Bosch',
    descripcion: 'Compatibles con motores a gasolina y diésel de autos y SUVs.',
    imagen: '/repuestos/filtro-aceite.png',
  },
  {
    nombre: 'Pastillas de freno Brembo',
    descripcion: 'Alto rendimiento para vehículos livianos y camionetas.',
    imagen: '/repuestos/pastilla-freno.png',
  },
  {
    nombre: 'Amortiguadores Monroe',
    descripcion: 'Confort y seguridad para caminos urbanos y rurales.',
    imagen: '/repuestos/amortiguadores.png',
  },
  {
    nombre: 'Batería AGM para SUV',
    descripcion: 'Alta duración, libre de mantenimiento.',
    imagen: '/repuestos/bateria-agm.png',
  },
  {
    nombre: 'Kit de embrague Luk',
    descripcion: 'Ideal para autos compactos y camionetas livianas.',
    imagen: '/repuestos/kit-embrague.png',
  },
  {
    nombre: 'Radiador aluminio universal',
    descripcion: 'Eficiencia térmica y fácil instalación.',
    imagen: '/repuestos/radiador-aluminio.png',
  },
]

export default function AutosPage() {
  return (
    <main className="bg-[#f9fafb] font-montserrat text-[#0f172a]">
      <section className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs />

        <h1 className="text-4xl font-bold mb-4">Repuestos para Autos y Camionetas</h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-10">
          Tenemos soluciones confiables para vehículos particulares, SUVs y camionetas. Trabajamos con marcas reconocidas para garantizar el mejor rendimiento y seguridad en cada repuesto.
        </p>

        {/* Repuestos populares */}
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {repuestosAutos.map((item, i) => (
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

        {/* Nota de imágenes referenciales */}
        <p className="text-sm text-gray-500 mb-10">
          *Las imágenes mostradas son referenciales y podrían no coincidir exactamente con el producto real.
        </p>

        {/* CTA WhatsApp */}
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl shadow flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-[#0f172a] mb-1">
              ¿Buscas alguno de estos repuestos para tu vehículo?
            </h2>
            <p className="text-gray-700 text-sm">
              Escríbenos por WhatsApp y uno de nuestros asesores te ayudará con la cotización.
            </p>
          </div>
          <Link
            href="https://wa.me/56928423774?text=Hola%20PartsMR%2C%20necesito%20repuestos%20para%20mi%20auto%20o%20camioneta"
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
