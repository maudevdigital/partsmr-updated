'use client'

import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsappButton() {
  return (
    <Link
      href="https://wa.me/56928423774"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-105"
      aria-label="Chatear por WhatsApp"
    >
      <FaWhatsapp className="w-10 h-10" />
    </Link>
  )
}
