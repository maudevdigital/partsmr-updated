'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { logEvent } from 'firebase/analytics'
import { analytics } from '../lib/firebase'

export default function AnalyticsEvents() {
  const pathname = usePathname()
  const [scrollLogged, setScrollLogged] = useState({
    '25': false,
    '50': false,
    '75': false,
    '100': false,
  })

  // Evento: session_start + page_loaded
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'session_start', {
        timestamp: new Date().toISOString(),
      })
      logEvent(analytics, 'page_loaded', {
        path: window.location.pathname,
      })
    }
  }, [])

  // Evento: navigation
  useEffect(() => {
    if (analytics && pathname) {
      logEvent(analytics, 'navigation', {
        path: pathname,
      })
    }
  }, [pathname])

  // Evento: scroll_depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const percent = (scrollY / docHeight) * 100

      const logIfNeeded = (value: 25 | 50 | 75 | 100) => {
        if (percent >= value && !scrollLogged[String(value)]) {
          logEvent(analytics, 'scroll_depth', { percent: value })
          setScrollLogged((prev) => ({ ...prev, [value]: true }))
        }
      }

      logIfNeeded(25)
      logIfNeeded(50)
      logIfNeeded(75)
      logIfNeeded(100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollLogged])

  // Evento: exit_intent (desktop)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && analytics) {
        logEvent(analytics, 'exit_intent', { path: pathname })
      }
    }

    document.addEventListener('mouseout', handleMouseLeave)
    return () => document.removeEventListener('mouseout', handleMouseLeave)
  }, [pathname])

  // Evento: idle_user (2 minutos)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (analytics) {
        logEvent(analytics, 'idle_user', {
          path: pathname,
          duration: '2min',
        })
      }
    }, 120000)
    return () => clearTimeout(timeout)
  }, [pathname])

  // Evento: referrer_source
  useEffect(() => {
    if (
      analytics &&
      document.referrer &&
      !document.referrer.includes(window.location.hostname)
    ) {
      logEvent(analytics, 'referrer_source', {
        from: document.referrer,
        to: window.location.href,
      })
    }
  }, [])

  return null
}
