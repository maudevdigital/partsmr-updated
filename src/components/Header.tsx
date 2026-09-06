'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
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
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef<number | null>(null)
  const pathname = usePathname()

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  // Close on route change
  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      closeMenu()
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        closeMenu()
      }
    }

    // Swipe down to dismiss
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current !== null && isMenuOpen) {
        const diff = e.changedTouches[0].clientY - touchStartY.current
        if (diff < -60) closeMenu() // swipe up to close
      }
      touchStartY.current = null
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchend', handleTouchEnd)

    // Lock body scroll when menu open
    if (isMenuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen, closeMenu])

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
                Repuestos <ChevronDown size={14} className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
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

          {/* Separador + Botón de llamada con selector de país */}
          <div className="hidden md:flex items-center gap-3">
            <div className="h-5 w-px bg-white/20" />
            <div
              className="relative"
              onMouseEnter={() => setShowPhoneDropdown(true)}
              onMouseLeave={() => setShowPhoneDropdown(false)}
            >
              <button
                className="flex items-center gap-1.5 bg-[#ff8a00] text-[#0f172a] text-sm font-medium px-3.5 py-1.5 rounded-md hover:bg-orange-600 transition-all duration-200"
              >
                <Phone size={14} />
                Asistencia
                <ChevronDown size={14} className={`transition-transform duration-200 ${showPhoneDropdown ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {showPhoneDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 bg-white rounded-lg shadow-xl mt-1.5 py-1.5 w-56 z-50 border border-gray-100"
                  >
                    <a
                      href="tel:+56928423774"
                      onClick={() => gtag_report_conversion('tel:+56928423774')}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-800 hover:bg-orange-50 transition-colors"
                    >
                      <Image src="/flags/bandera-chile.webp" alt="Chile" width={20} height={14} className="rounded-sm object-cover" />
                      <div>
                        <p className="font-semibold text-gray-900 text-xs">Chile</p>
                        <p className="text-[11px] text-gray-500">+56 9 2842 3774</p>
                      </div>
                    </a>
                    <a
                      href="tel:+595992110955"
                      onClick={() => gtag_report_conversion('tel:+595992110955')}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-800 hover:bg-orange-50 transition-colors"
                    >
                      <Image src="/flags/bandera-paraguay.webp" alt="Paraguay" width={20} height={14} className="rounded-sm object-cover" />
                      <div>
                        <p className="font-semibold text-gray-900 text-xs">Paraguay</p>
                        <p className="text-[11px] text-gray-500">+595 992 110 955</p>
                      </div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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

        {/* Overlay backdrop mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-black/50 backdrop-blur-sm md:hidden z-40"
              onClick={closeMenu}
            />
          )}
        </AnimatePresence>

        {/* Menú mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden bg-[#0f172a]/80 backdrop-blur-xl border-t border-white/5 overflow-hidden z-50 relative"
            >
              <nav className="px-5 py-5 flex flex-col gap-1">
                {[
                  { href: '/', label: 'Inicio' },
                  { href: '/servicios', label: 'Servicios' },
                  { href: '/contacto', label: 'Contacto' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`px-3 py-2.5 rounded-lg text-[15px] font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-orange-400 bg-white/5'
                        : 'text-gray-200 active:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Repuestos sub-menu */}
                <div className="mt-1">
                  <p className="px-3 py-2 text-[11px] uppercase tracking-wider text-gray-500 font-medium">Repuestos</p>
                  <div className="flex flex-col gap-0.5">
                    {[
                      { href: '/repuestos/maquinaria', label: 'Maquinaria' },
                      { href: '/repuestos/autos', label: 'Autos y camionetas' },
                      { href: '/repuestos/camiones', label: 'Camiones' },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                          isActive(item.href)
                            ? 'text-orange-400 bg-orange-500/10 font-medium'
                            : 'text-gray-300 active:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Teléfonos */}
                <div className="mt-3 pt-3 border-t border-white/5 flex flex-col gap-2">
                  <a
                    href="tel:+56928423774"
                    onClick={() => { gtag_report_conversion('tel:+56928423774'); closeMenu() }}
                    className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2.5 active:bg-white/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-500/15 flex items-center justify-center">
                      <Phone size={14} className="text-orange-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Chile</p>
                      <p className="text-sm font-medium text-white">+56 9 2842 3774</p>
                    </div>
                  </a>
                  <a
                    href="tel:+595992110955"
                    onClick={() => { gtag_report_conversion('tel:+595992110955'); closeMenu() }}
                    className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2.5 active:bg-white/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-500/15 flex items-center justify-center">
                      <Phone size={14} className="text-orange-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Paraguay</p>
                      <p className="text-sm font-medium text-white">+595 992 110 955</p>
                    </div>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}
