'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { gtag_report_conversion } from '../lib/gtag'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

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

  const isActive = (route: string) => pathname === route
  const isRepuestosActive = pathname.startsWith('/repuestos')

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f172a]/90 shadow-md backdrop-blur border-b border-[#ffffff22]'
            : 'bg-[#0f172a]'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/icon.png"
              alt="PartsMR Icon"
              width={32}
              height={32}
              priority
            />
            <span className="text-lg font-bold text-white tracking-wide">
              PartsMR
            </span>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium relative">
            <Link
              href="/"
              className={`transition-colors duration-200 ${
                isActive('/')
                  ? 'text-orange-400'
                  : 'text-gray-200 hover:text-orange-400'
              }`}
            >
              Inicio
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors duration-200 ${
                  isRepuestosActive
                    ? 'text-orange-400'
                    : 'text-gray-200 hover:text-orange-400'
                }`}
              >
                Repuestos <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-white rounded-md shadow-lg mt-2 py-2 w-56 z-50"
                  >
                    {[
                      { href: '/repuestos/maquinaria', label: 'Maquinaria' },
                      { href: '/repuestos/autos', label: 'Autos y camionetas' },
                      { href: '/repuestos/camiones', label: 'Camiones' },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`block px-4 py-2 text-sm transition-colors rounded ${
                          isActive(item.href)
                            ? 'bg-orange-100 text-orange-600 font-medium'
                            : 'text-gray-800 hover:bg-orange-100 hover:text-orange-600'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/servicios"
              className={`transition-colors duration-200 ${
                isActive('/servicios')
                  ? 'text-orange-400'
                  : 'text-gray-200 hover:text-orange-400'
              }`}
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className={`transition-colors duration-200 ${
                isActive('/contacto')
                  ? 'text-orange-400'
                  : 'text-gray-200 hover:text-orange-400'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Botón de llamada */}
          <div className="hidden md:flex">
            <a
              href="tel:+56928423774"
              onClick={() => gtag_report_conversion('tel:+56928423774')}
              className="flex items-center gap-2 bg-orange-500 text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-orange-600 transition-all duration-200"
            >
              <Phone size={18} />
              Asistencia Inmediata
            </a>
          </div>

          {/* Botón menú mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-orange-400 transition-transform duration-200 z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menú mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[#0f172a] px-6 py-6 shadow-inner"
            >
              <div className="flex flex-col items-start space-y-4">
                <Link
                  href="/"
                  className={`text-base font-medium w-full ${
                    isActive('/')
                      ? 'text-orange-400'
                      : 'text-white hover:text-orange-400'
                  }`}
                >
                  Inicio
                </Link>

                {/* Submenú Repuestos mobile refinado */}
                <div className="space-y-2 w-full">
                  <span className="text-white font-medium">Repuestos</span>
                  <div className="pl-2 flex flex-col gap-2 mt-2">
                    {[
                      { href: '/repuestos/maquinaria', label: 'Maquinaria' },
                      { href: '/repuestos/autos', label: 'Autos y camionetas' },
                      { href: '/repuestos/camiones', label: 'Camiones' },
                    ].map((item, i) => {
                      const isActiveItem = isActive(item.href)
                      return (
                        <Link
                          key={i}
                          href={item.href}
                          className={`w-full px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                            isActiveItem
                              ? 'bg-white/5 border-l-4 border-orange-500 text-orange-400'
                              : 'bg-[#1e293b] text-white hover:bg-orange-500'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>

                <Link
                  href="/servicios"
                  className={`text-base font-medium w-full ${
                    isActive('/servicios')
                      ? 'text-orange-400'
                      : 'text-white hover:text-orange-400'
                  }`}
                >
                  Servicios
                </Link>
                <Link
                  href="/contacto"
                  className={`text-base font-medium w-full ${
                    isActive('/contacto')
                      ? 'text-orange-400'
                      : 'text-white hover:text-orange-400'
                  }`}
                >
                  Contacto
                </Link>

                <div className="w-full border-t border-[#ffffff22] pt-4" />

                <a
                  href="tel:+56928423774"
                  onClick={() => gtag_report_conversion('tel:+56928423774')}
                  className="flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-5 py-2.5 rounded-md shadow-md hover:bg-orange-600 transition-all w-full"
                >
                  <Phone size={18} />
                  Llamar Ahora
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}
