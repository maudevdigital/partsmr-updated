'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { gtag_report_conversion, gtag_report_conversion_whatsapp } from '../lib/gtag'

export default function Footer() {
  const handleCallClick = (url: string) => {
    gtag_report_conversion(url)
  }

  const handleWhatsappClick = () => {
    gtag_report_conversion_whatsapp()
  }

  return (
    <footer className="bg-[#0f172a] text-white pt-10 px-6 pb-6 md:pb-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 pb-10 text-[13px] font-normal">
        {/* Branding */}
        <div className="flex-1 flex flex-col items-start text-left space-y-3">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/icon.png" alt="PartsMR Icon" width={26} height={26} />
            <span className="text-xl font-bold tracking-wide">PartsMR</span>
          </Link>
          <p className="text-gray-400 leading-relaxed text-[13px]">
            Soluciones confiables en repuestos y componentes para tu operación.
          </p>

          {/* Teléfonos — compacto, una sola línea visual por país */}
          <div className="pt-1 space-y-1.5">
            <p className="text-[11px] uppercase tracking-wider text-gray-500 font-medium">Atención comercial</p>
            <a
              href="tel:+56928423774"
              onClick={() => handleCallClick('tel:+56928423774')}
              className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition text-[13px]"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500/80" />
              <span>CL +56 9 2842 3774</span>
            </a>
            <a
              href="tel:+595992110955"
              onClick={() => handleCallClick('tel:+595992110955')}
              className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition text-[13px]"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500/80" />
              <span>PY +595 992 110 955</span>
            </a>
          </div>
        </div>

        {/* Servicios */}
        <div className="flex-1 flex flex-col items-start text-left space-y-3">
          <h3 className="text-sm font-semibold text-white">Nuestros Servicios</h3>
          <ul className="space-y-1.5 text-gray-400">
            <li>Reparación de componentes</li>
            <li>Overhaul y semioverhaul de equipos</li>
            <li>Fortificación de baldes</li>
            <li>Acreditación y protocolos mineros</li>
          </ul>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex-1 flex flex-col items-start text-left space-y-3">
          <h3 className="text-sm font-semibold text-white">Enlaces Rápidos</h3>
          <ul className="space-y-1.5 text-gray-400">
            <li><Link href="/" className="hover:text-orange-400 transition">Inicio</Link></li>
            <li><Link href="/sobre-nosotros" className="hover:text-orange-400 transition">Sobre Nosotros</Link></li>
            <li><Link href="/repuestos" className="hover:text-orange-400 transition">Repuestos</Link></li>
            <li><Link href="/servicios" className="hover:text-orange-400 transition">Servicios</Link></li>
            <li><Link href="/contacto" className="hover:text-orange-400 transition">Contáctanos</Link></li>
          </ul>
        </div>

        {/* Horario + Contacto */}
        <div className="flex-1 flex flex-col items-start text-left space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-white mb-2">Horario de Atención</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Lunes a Viernes: 09:00 – 18:00</li>
              <li>Sábado: 09:00 – 13:00</li>
              <li>Domingo y festivos: Cerrado</li>
            </ul>
          </div>

          {/* WhatsApp — limpio, sin íconos repetidos */}
          <div>
            <p className="text-[11px] uppercase tracking-wider text-gray-500 font-medium mb-1.5">WhatsApp</p>
            <div className="space-y-1">
              <a
                href="https://wa.me/56928423774?text=Hola%20PartsMR%20%F0%9F%91%8B%2C%20me%20gustar%C3%ADa%20cotizar%20un%20repuesto.%20%C2%BFPodr%C3%ADan%20ayudarme%3F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsappClick}
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition text-[13px]"
                aria-label="WhatsApp Chile"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
                <span>CL +56 9 2842 3774</span>
              </a>
              <a
                href="https://wa.me/595992110955?text=Hola%20PartsMR%20%F0%9F%91%8B%2C%20me%20gustar%C3%ADa%20cotizar%20un%20repuesto.%20%C2%BFPodr%C3%ADan%20ayudarme%3F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsappClick}
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition text-[13px]"
                aria-label="WhatsApp Paraguay"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
                <span>PY +595 992 110 955</span>
              </a>
            </div>
          </div>


        </div>
      </div>

      {/* Créditos */}
      <div className="border-t border-white/5 pt-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 text-center md:text-left gap-2">
          <p>© {new Date().getFullYear()} PartsMR. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{' '}
            <a
              href="https://maudev.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white underline underline-offset-2 transition"
            >
              MauDev
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
