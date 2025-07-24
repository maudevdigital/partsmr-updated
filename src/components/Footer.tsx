'use client'

import Link from 'next/link'
import { PhoneCall } from 'lucide-react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-10 px-6 pb-6 md:pb-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 pb-10">
        {/* Branding */}
        <div className="flex-1 flex flex-col items-start text-left space-y-4">
          <h1 className="text-2xl font-bold">PartsMR</h1>
          <p className="text-sm text-gray-300">
            Soluciones confiables en repuestos y componentes para tu operación.
          </p>
          <div className="space-y-1">
            <p className="text-sm text-gray-300">Atención comercial</p>
            <a
              href="tel:+56928423774"
              className="text-lg font-semibold text-white hover:text-orange-400 transition inline-flex items-center gap-2"
            >
              <PhoneCall className="w-5 h-5 text-orange-500" /> +56 9 2842 3774
            </a>
          </div>
        </div>

        {/* Servicios */}
        <div className="flex-1 flex flex-col items-start text-left space-y-4">
          <h3 className="text-lg font-semibold text-white">Nuestros Servicios</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Reparación de componentes</li>
            <li>Overhaul y semioverhaul de equipos</li>
            <li>Fortificación de baldes</li>
            <li>Acreditación y protocolos mineros</li>
          </ul>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex-1 flex flex-col items-start text-left space-y-4">
          <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link href="/" className="hover:text-orange-400 transition">Inicio</Link></li>
            <li><Link href="/sobre-nosotros" className="hover:text-orange-400 transition">Sobre Nosotros</Link></li>
            <li><Link href="/repuestos" className="hover:text-orange-400 transition">Repuestos</Link></li>
            <li><Link href="/servicios" className="hover:text-orange-400 transition">Servicios</Link></li>
            <li><Link href="/contacto" className="hover:text-orange-400 transition">Contáctanos</Link></li>
          </ul>
        </div>

        {/* Horario + Redes */}
        <div className="flex-1 flex flex-col items-start text-left space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Horario de Atención</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Lunes a Viernes: 09:00 – 18:00</li>
              <li>Sábado: 09:00 – 13:00</li>
              <li>Domingo y festivos: Cerrado</li>
            </ul>
          </div>

          <div className="pt-2 flex gap-4">
            <a
              href="https://wa.me/56928423774"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/partsmr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Créditos */}
      <div className="border-t border-[#1e293b] pt-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start text-sm text-gray-400 text-center md:text-left gap-2">
          <p className="w-full md:w-auto">
            © {new Date().getFullYear()} PartsMR. Todos los derechos reservados.
          </p>
          <p className="w-full md:w-auto">
            Desarrollado por{' '}
            <a
              href="https://maudev.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white underline underline-offset-2 transition"
            >
              MauDev
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
