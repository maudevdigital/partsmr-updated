'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { logEvent } from 'firebase/analytics'
import { analytics } from '../lib/firebase'

export default function AnalyticsEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [scrollLogged, setScrollLogged] = useState({
    '25': false,
    '50': false,
    '75': false,
    '100': false,
  })
  
  const sessionStartRef = useRef(false)
  const pageLoadTimeRef = useRef<number>(Date.now())
  const lastActivityRef = useRef<number>(Date.now())
  const engagementTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Helper: Push to dataLayer for GTM
  const pushToDataLayer = useCallback((eventName: string, eventData: any = {}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...eventData,
      })
    }
  }, [])

  // Helper: Log to both Firebase and GTM
  const trackEvent = useCallback((eventName: string, eventData: any = {}) => {
    // Firebase Analytics
    if (analytics) {
      logEvent(analytics, eventName, eventData)
    }
    // Google Tag Manager
    pushToDataLayer(eventName, eventData)
  }, [pushToDataLayer])

  // 1. Session start (una sola vez)
  useEffect(() => {
    if (!sessionStartRef.current && analytics) {
      sessionStartRef.current = true
      const utmParams = {
        utm_source: searchParams.get('utm_source') || 'direct',
        utm_medium: searchParams.get('utm_medium') || 'none',
        utm_campaign: searchParams.get('utm_campaign') || 'none',
        utm_content: searchParams.get('utm_content') || 'none',
        utm_term: searchParams.get('utm_term') || 'none',
      }

      trackEvent('session_start', {
        timestamp: new Date().toISOString(),
        ...utmParams,
        device_type: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
        browser: navigator.userAgent,
      })

      // Track referrer
      if (document.referrer && !document.referrer.includes(window.location.hostname)) {
        trackEvent('referrer_source', {
          from: document.referrer,
          to: window.location.href,
        })
      }
    }
  }, [searchParams, trackEvent])

  // 2. Page view con tiempo de carga
  useEffect(() => {
    if (analytics && pathname) {
      const loadTime = Date.now() - pageLoadTimeRef.current
      
      trackEvent('page_view', {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
        load_time: loadTime,
      })

      // Reset scroll tracking en nueva página
      setScrollLogged({
        '25': false,
        '50': false,
        '75': false,
        '100': false,
      })
      
      pageLoadTimeRef.current = Date.now()
    }
  }, [pathname, trackEvent])

  // 3. Scroll depth mejorado con throttle
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      
      scrollTimeout = setTimeout(() => {
        const scrollY = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const percent = Math.round((scrollY / docHeight) * 100)

        const checkpoints = [25, 50, 75, 100] as const
        
        checkpoints.forEach((checkpoint) => {
          if (percent >= checkpoint && !scrollLogged[String(checkpoint)]) {
            trackEvent('scroll_depth', {
              percent: checkpoint,
              page_path: pathname,
            })
            setScrollLogged((prev) => ({ ...prev, [checkpoint]: true }))
          }
        })
      }, 200) // Throttle de 200ms
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [scrollLogged, pathname, trackEvent])

  // 4. Exit intent mejorado
  useEffect(() => {
    let exitLogged = false

    const handleMouseLeave = (e: MouseEvent) => {
      // Solo en desktop y si el mouse sale por arriba
      if (e.clientY < 10 && !exitLogged && !/Mobile|Android|iPhone/i.test(navigator.userAgent)) {
        exitLogged = true
        trackEvent('exit_intent', {
          page_path: pathname,
          time_on_page: Date.now() - pageLoadTimeRef.current,
        })
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [pathname, trackEvent])

  // 5. User engagement (actividad cada 30s)
  useEffect(() => {
    const updateActivity = () => {
      lastActivityRef.current = Date.now()
    }

    // Eventos que indican actividad
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click']
    events.forEach(event => {
      window.addEventListener(event, updateActivity, { passive: true })
    })

    // Timer para engagement
    engagementTimerRef.current = setInterval(() => {
      const timeSinceActivity = Date.now() - lastActivityRef.current
      
      // Usuario activo (menos de 30s sin actividad)
      if (timeSinceActivity < 30000) {
        trackEvent('user_engagement', {
          page_path: pathname,
          engagement_time_msec: 30000,
        })
      }
    }, 30000) // Cada 30 segundos

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, updateActivity)
      })
      if (engagementTimerRef.current) {
        clearInterval(engagementTimerRef.current)
      }
    }
  }, [pathname, trackEvent])

  // 6. Time on page antes de salir
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeOnPage = Date.now() - pageLoadTimeRef.current
      
      if (analytics) {
        trackEvent('page_exit', {
          page_path: pathname,
          time_on_page: timeOnPage,
          scroll_depth: Object.keys(scrollLogged).filter(k => scrollLogged[k]).length * 25,
        })
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [pathname, scrollLogged, trackEvent])

  // 7. Visibility change (usuario cambia de tab)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        trackEvent('page_hidden', {
          page_path: pathname,
          time_visible: Date.now() - pageLoadTimeRef.current,
        })
      } else {
        trackEvent('page_visible', {
          page_path: pathname,
        })
        pageLoadTimeRef.current = Date.now()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [pathname, trackEvent])

  // 8. Errores de JavaScript
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      trackEvent('javascript_error', {
        error_message: event.message,
        error_filename: event.filename,
        error_lineno: event.lineno,
        error_colno: event.colno,
        page_path: pathname,
      })
    }

    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [pathname, trackEvent])

  return null
}
