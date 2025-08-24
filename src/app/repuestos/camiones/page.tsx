'use client'

import Breadcrumbs from '../../../components/Breadcrumbs'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const repuestosCamiones = [
  {
    nombre: 'Filtro de combustible Fleetguard',
    descripcion: 'Diseñado para motores diésel de alto rendimiento.',
    imagen: '/repuestos/camiones/filtro-combustible.webp',
  },
  {
    nombre: 'Turbocharger Cummins',
    descripcion: 'Optimiza la potencia y eficiencia del motor.',
    imagen: '/repuestos/camiones/turbo-camion.webp',
  },
  {
    nombre: 'Compresor de aire Knorr-Bremse',
    descripcion: 'Sistema de freno neumático confiable para camiones pesados.',
    imagen: '/repuestos/camiones/compresor-aire.webp',
  },
  {
    nombre: 'Embrague Sachs para camión',
    descripcion: 'Mayor vida útil y rendimiento en cargas pesadas.',
    imagen: '/repuestos/camiones/embrague-camion.webp',
  },
  {
    nombre: 'Eje diferencial Meritor',
    descripcion: 'Robustez y durabilidad para camiones de largo recorrido.',
    imagen: '/repuestos/camiones/eje-diferencial.webp',
  },
  {
    nombre: 'Radiador reforzado de aluminio',
    descripcion: 'Refrigeración óptima para motores de gran tamaño.',
    imagen: '/repuestos/camiones/radiador-camion.webp',
  },
]

export default function CamionesPage() {
  return (
    <main className="bg-[#f9fafb] font-montserrat text-[#0f172a]">
      <section className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs />

        <h1 className="text-4xl font-bold mb-4">Repuestos para Camiones</h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-10">
          Ofrecemos repuestos robustos y de alto desempeño para camiones de carga, flotas y transporte de larga distancia. Calidad garantizada y disponibilidad inmediata.
        </p>

        {/* Repuestos populares */}
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {repuestosCamiones.map((item, i) => (
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
          *Las imágenes de los productos son referenciales y podrían variar respecto al modelo real.
        </p>

        {/* CTA WhatsApp */}
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl shadow flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-[#0f172a] mb-1">
              ¿Estás buscando un repuesto específico para tu camión?
            </h2>
            <p className="text-gray-700 text-sm">
              Escríbenos por WhatsApp y te ayudaremos a encontrarlo rápidamente.
            </p>
          </div>
          <Link
            href="https://wa.me/56928423774?text=Hola%20PartsMR%2C%20necesito%20repuestos%20para%20camión"
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
