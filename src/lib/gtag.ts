// Google Ads Conversion Tracking
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-16953811243'

// Declarar gtag para TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

// Tipos de conversión disponibles
type ConversionEvent = 'whatsapp_click' | 'call_click' | 'form_submit'

// IDs de conversión de Google Ads (etiquetas de conversión)
const conversionIds: Record<ConversionEvent, string> = {
  whatsapp_click: process.env.NEXT_PUBLIC_CONVERSION_WHATSAPP || '',
  call_click: process.env.NEXT_PUBLIC_CONVERSION_CALL || '',
  form_submit: process.env.NEXT_PUBLIC_CONVERSION_FORM || '',
}

/**
 * Registra una conversión en Google Ads
 * @param event - Tipo de evento de conversión
 * @param value - Valor opcional de la conversión
 * @param callback - Función a ejecutar después de registrar la conversión
 */
export const trackConversion = (
  event: ConversionEvent,
  value?: number,
  callback?: () => void
) => {
  const conversionLabel = conversionIds[event]

  if (!conversionLabel) {
    console.warn(`No se encontró etiqueta de conversión para: ${event}`)
    if (callback) callback()
    return
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GA_TRACKING_ID}/${conversionLabel}`,
      value: value || 1.0,
      currency: 'CLP',
      event_callback: callback,
    })
    console.log(`Conversión registrada: ${event}`)
  } else {
    console.warn('Google Ads gtag no está disponible')
    if (callback) callback()
  }
}

/**
 * Log de pageview (opcional)
 */
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}
