'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Breadcrumbs from '../../components/Breadcrumbs'
import { FaWhatsapp, FaRobot, FaCogs } from 'react-icons/fa'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { gtag_report_conversion_whatsapp } from '../../lib/gtag'
import { SERVICIOS } from '../../data/servicios'


export default function ServiciosPage() {
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowModal(false)
      }
    }

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showModal])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash === '#symx') {
        setTimeout(() => {
          setShowModal(true)
        }, 300)
      }
    }
  }, [])

  return (
    <main className="bg-[#f9fafb] font-montserrat text-[#0f172a]">
      <section className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs />

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 max-w-3xl leading-tight">
          Servicio técnico para maquinaria en faena
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mb-3 leading-relaxed">
          Además de importar repuestos, intervenimos el equipo. Trabajamos con operaciones
          mineras y de construcción, donde una máquina detenida cuesta por hora y el proveedor
          debe cumplir los estándares de la faena para poder entrar.
        </p>
        <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
          Evaluamos si conviene reparar el componente, hacer un semioverhaul o reemplazar la
          pieza, y entregamos el costo de cada alternativa antes de intervenir.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {SERVICIOS.map((serv, i) => (
            <div
              key={i}
              className="bg-white border border-zinc-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2 border-l-4 border-orange-500 pl-3">
                {serv.titulo}
              </h2>
              <p className="text-gray-700 text-sm">{serv.descripcion}</p>
              {/* El detalle explica cuando conviene cada servicio; antes vivia
                  en un bloque aparte que repetia toda la lista. */}
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">{serv.detalle}</p>
            </div>
          ))}
        </div>

        {/* SYMX no es uno de los servicios tecnicos: iba dentro del mismo grid
            y dejaba la ultima fila coja, ademas de mezclar dos cosas distintas. */}
        <div className="mb-12">
          <div
            id="symx"
            onClick={() => setShowModal(true)}
            className="scroll-mt-32 cursor-pointer border-2 border-[#ff8a00] text-[#0f172a] rounded-xl shadow-lg p-6 hover:shadow-xl transition relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaRobot className="w-6 h-6 text-[#ff8a00]" />
              <h2 className="text-xl font-semibold">
                Mantenimiento Predictivo con SYMX AI
              </h2>
            </div>
            <p className="text-sm">
              Inteligencia artificial para detectar fallas antes que ocurran, optimizar mantenimiento y reducir paradas de tus equipos.
              Haz clic para ver más sobre la alianza.
            </p>
          </div>

          {/* Nueva tarjeta: Venta de repuestos */}
          <div className="bg-white border border-zinc-200 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <FaCogs className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold">
                Venta de Repuestos Variados
              </h2>
            </div>
            <p className="text-gray-700 text-sm">
              Contamos con un amplio stock de repuestos originales y alternativos certificados para autos, camiones y maquinaria pesada. Cotiza con nosotros y recibe asesoría técnica especializada.
            </p>
            <div className="flex flex-col gap-1.5 mt-4">
              <Link
                href="https://wa.me/56928423774?text=Hola%20PartsMR%20%F0%9F%91%8B%2C%20necesito%20cotizar%20repuestos.%20%C2%BFPodr%C3%ADan%20ayudarme%3F%20Busco%3A"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtag_report_conversion_whatsapp()}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600 hover:text-green-700 transition"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
                CL →
              </Link>
              <Link
                href="https://wa.me/595992110955?text=Hola%20PartsMR%20%F0%9F%91%8B%2C%20necesito%20cotizar%20repuestos.%20%C2%BFPodr%C3%ADan%20ayudarme%3F%20Busco%3A"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtag_report_conversion_whatsapp()}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600 hover:text-green-700 transition"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
                PY →
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl shadow flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-[#0f172a] mb-1">
              ¿Te interesa contratar uno de estos servicios?
            </h2>
            <p className="text-gray-700 text-sm">
              Escríbenos por WhatsApp y te orientaremos según tus requerimientos técnicos o contractuales.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="https://wa.me/56928423774?text=Hola%20PartsMR%20%F0%9F%91%8B%2C%20estoy%20interesado%20en%20los%20servicios%20de%20mantenimiento.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F%20El%20servicio%20que%20necesito%20es%3A"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtag_report_conversion_whatsapp()}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-5 py-2.5 rounded-md transition shadow"
            >
              <FaWhatsapp className="w-4 h-4" />
              CL
            </Link>
            <Link
              href="https://wa.me/595992110955?text=Hola%20PartsMR%20%F0%9F%91%8B%2C%20estoy%20interesado%20en%20los%20servicios%20de%20mantenimiento.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F%20El%20servicio%20que%20necesito%20es%3A"
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

      {/* Modal SYMX */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center px-4 bg-white/30 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-xl max-w-2xl w-full shadow-lg p-8 relative text-gray-900 border-2 border-[#ff8a00]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold text-[#ff8a00] mb-4">
                Alianza con SYMX AI
              </h2>
              <p className="mb-3 text-sm">
                En PartsMR nos hemos aliado con <strong>SYMX AI</strong>, líder en soluciones de inteligencia artificial aplicada al mantenimiento industrial, para ofrecer una plataforma avanzada de monitoreo predictivo.
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 mb-4">
                <li>Detección anticipada de fallas mecánicas y electrónicas.</li>
                <li>Optimización de ciclos de mantenimiento y repuestos.</li>
                <li>Dashboard de salud de flota en tiempo real.</li>
                <li>Alertas automáticas y reportes personalizables.</li>
                <li>Integración con sensores, SCADA y plataformas ERP.</li>
              </ul>
              <p className="text-sm">
                Con esta alianza potenciamos la eficiencia operativa de tus activos, reducimos costos y aumentamos la disponibilidad técnica.
                Escríbenos si deseas agendar una demo o conocer más.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
