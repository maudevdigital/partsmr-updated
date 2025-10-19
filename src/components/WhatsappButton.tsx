'use client'

import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { useEffect } from 'react'
import { analytics } from '../lib/firebase'
import { logEvent } from 'firebase/analytics'
import { trackConversion } from '../lib/gtag'

export default function WhatsappButton() {
  const handleClick = () => {
    // Firebase Analytics
    if (analytics) {
      logEvent(analytics, 'whatsapp_click', {
        location: 'floating_button',
        label: 'boton_flotante',
      })
    }

    // Google Ads Conversion
    trackConversion('whatsapp_click')
  }

  return (
    <Link
      href="https://wa.me/56928423774"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-105"
      aria-label="Chatear por WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </Link>
  )
}
