'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setIsMenuOpen(false)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`overflow-hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0d0d0d]/90 shadow-lg backdrop-blur border-b border-[#ffffff22]'
            : 'bg-[#0d0d0d]'
        }`}
      >
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/icon.webp"
              alt="PartsMR Icon"
              width={32}
              height={32}
              priority
            />
            <span className="text-lg font-bold text-white tracking-wide">
              PartsMR
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['Inicio', 'Productos', 'Servicios', 'Contacto'].map((item, index) => (
              <Link
                key={index}
                href="#"
                className="text-white hover:text-[#FF8A00] transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a
              href="tel:+56912345678"
              className="flex items-center gap-2 bg-[#FF8A00] text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-[#e67e00] transition-all duration-200"
            >
              <Phone size={18} />
              Asistencia Inmediata
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#FF8A00] transition-transform duration-200 z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[#121212] px-6 py-6 shadow-inner"
            >
              <div className="flex flex-col items-center space-y-4">
                {['Inicio', 'Productos', 'Servicios', 'Contacto'].map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-white text-base font-medium hover:text-[#FF8A00] transition-colors"
                  >
                    {item}
                  </Link>
                ))}

                <div className="w-full border-t border-[#ffffff22] pt-4" />

                <a
                  href="tel:+56912345678"
                  className="flex items-center justify-center gap-2 bg-[#FF8A00] text-white font-semibold px-5 py-2.5 rounded-md shadow-md hover:bg-[#e67e00] transition-all w-full"
                >
                  <Phone size={18} />
                  Llamar Ahora
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="h-16" />
    </>
  )
}
