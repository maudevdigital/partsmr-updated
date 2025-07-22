'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function WhatsappButton() {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=56928423774"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-105"
    >
      <Image
        src="/whatsapp-logo.png" // Asegúrate de tener el logo sin fondo en public/
        alt="WhatsApp"
        width={64}
        height={64}
        className="drop-shadow-lg"
      />
    </Link>
  )
}
