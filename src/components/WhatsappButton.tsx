'use client'

import { useState, useRef, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { X } from 'lucide-react'
import { analytics } from '../lib/firebase'
import { logEvent } from 'firebase/analytics'
import { gtag_report_conversion_whatsapp } from '../lib/gtag'
import { AnimatePresence, motion } from 'framer-motion'

const phones = [
  {
    country: 'Chile',
    flag: '/flags/bandera-chile.webp',
    number: '+56 9 2842 3774',
    whatsapp: '56928423774',
    message: 'Hola PartsMR 👋, estoy interesado en cotizar repuestos. ¿Podrían ayudarme con disponibilidad y precios? Mi consulta es sobre:',
  },
  {
    country: 'Paraguay',
    flag: '/flags/bandera-paraguay.webp',
    number: '+595 992 110 955',
    whatsapp: '595992110955',
    message: 'Hola PartsMR 👋, estoy interesado en cotizar repuestos. ¿Podrían ayudarme con disponibilidad y precios? Mi consulta es sobre:',
  },
]

export default function WhatsappButton() {
  const [showOptions, setShowOptions] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowOptions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleClick = (country: string) => {
    if (analytics) {
      logEvent(analytics, 'whatsapp_click', {
        location: 'floating_button',
        label: `boton_flotante_${country}`,
      })
    }
    gtag_report_conversion_whatsapp()
  }

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-64 mb-2"
          >
            <div className="px-4 py-3 bg-green-500 text-white text-sm font-semibold flex items-center gap-2">
              <FaWhatsapp className="w-4 h-4" />
              Escríbenos por WhatsApp
            </div>
            {phones.map((phone) => (
              <a
                key={phone.country}
                href={`https://wa.me/${phone.whatsapp}?text=${encodeURIComponent(phone.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClick(phone.country.toLowerCase())}
                className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition-colors border-b border-gray-100 last:border-b-0"
              >
                <img
                  src={phone.flag}
                  alt={phone.country}
                  className="w-7 h-auto rounded-sm shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900">{phone.country}</p>
                  <p className="text-xs text-gray-500">{phone.number}</p>
                </div>
                <FaWhatsapp className="ml-auto w-4 h-4 text-green-500 shrink-0" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setShowOptions(!showOptions)}
        className={`${showOptions ? 'bg-gray-600 hover:bg-gray-700' : 'bg-green-500 hover:bg-green-600'} text-white rounded-full p-4 shadow-lg transition-all hover:scale-105`}
        aria-label="Chatear por WhatsApp"
      >
        {showOptions ? <X className="w-6 h-6" /> : <FaWhatsapp className="w-6 h-6" />}
      </button>
    </div>
  )
}
