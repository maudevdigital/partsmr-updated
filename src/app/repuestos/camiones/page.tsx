'use client'

import Breadcrumbs from '../../../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { gtag_report_conversion_whatsapp } from '../../../lib/gtag'

type Item = {
  nombre: string
  descripcion: string
  imagen: string
}

const repuestosCamiones: Item[] = [
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
              {/* Contenedor para next/image con fill y proporción estable */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={item.imagen}
                  alt={item.nombre}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  priority={i < 2}
                />
              </div>

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
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="https://wa.me/56928423774?text=Hola%20PartsMR%20%F0%9F%91%8B%2C%20necesito%20repuestos%20para%20cami%C3%B3n.%20%C2%BFPodr%C3%ADan%20cotizarme%3F%20El%20modelo%20y%20repuesto%20que%20necesito%20es%3A"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtag_report_conversion_whatsapp()}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-5 py-2.5 rounded-md transition shadow"
            >
              <FaWhatsapp className="w-4 h-4" />
              CL
            </Link>
            <Link
              href="https://wa.me/595992110955?text=Hola%20PartsMR%20%F0%9F%91%8B%2C%20necesito%20repuestos%20para%20cami%C3%B3n.%20%C2%BFPodr%C3%ADan%20cotizarme%3F%20El%20modelo%20y%20repuesto%20que%20necesito%20es%3A"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtag_report_conversion_whatsapp()}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-5 py-2.5 rounded-md transition shadow"
            >
              <FaWhatsapp className="w-4 h-4" />
              PY
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
