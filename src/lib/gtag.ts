// Google Ads Conversion Tracking via GTM
export const GA_TRACKING_ID = 'AW-16953811243'
export const GTM_ID = 'GTM-MGW5KZZ7'

// Declarar dataLayer para TypeScript
declare global {
  interface Window {
    dataLayer?: any[]
  }
}

// Tipos de conversión disponibles
type ConversionEvent = 'whatsapp_click' | 'call_click' | 'form_submit'

// IDs de conversión de Google Ads (etiquetas de conversión)
const conversionIds: Record<ConversionEvent, string> = {
  whatsapp_click: 'nCNpCIrszLMbEXvcOmpQ_', // Click boton whatsapp
  call_click: 'mLEnC1zs1MeEXvcOmpQ_', // Click boton llamadas
  form_submit: '4ErOCMWgg40bERvCmpQ_', // Formulario de cotización
}

/**
 * Push evento a dataLayer de GTM
 */
function pushToDataLayer(eventData: any) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(eventData)
    console.log('📊 GTM Event:', eventData)
  }
}

/**
 * Función para reportar conversiones de llamadas (Click boton llamadas)
 * Envía el evento a GTM dataLayer
 */
export function gtag_report_conversion(url?: string) {
  pushToDataLayer({
    event: 'conversion',
    conversion_type: 'call_click',
    conversion_id: GA_TRACKING_ID,
    conversion_label: conversionIds.call_click,
    send_to: `${GA_TRACKING_ID}/${conversionIds.call_click}`,
    event_category: 'engagement',
    event_label: 'phone_call',
    value: 1,
  })

  // Callback para redirección
  if (url) {
    setTimeout(() => {
      window.location.href = url
    }, 300)
  }
  
  return false
}

/**
 * Función para conversiones de WhatsApp (Click boton whatsapp)
 * Envía el evento a GTM dataLayer
 */
export function gtag_report_conversion_whatsapp(url?: string) {
  pushToDataLayer({
    event: 'conversion',
    conversion_type: 'whatsapp_click',
    conversion_id: GA_TRACKING_ID,
    conversion_label: conversionIds.whatsapp_click,
    send_to: `${GA_TRACKING_ID}/${conversionIds.whatsapp_click}`,
    event_category: 'engagement',
    event_label: 'whatsapp_click',
    value: 1,
  })

  // Callback para redirección
  if (url) {
    setTimeout(() => {
      window.location.href = url
    }, 300)
  }
  
  return false
}

/**
 * Función para conversiones de formulario
 * Envía el evento a GTM dataLayer
 */
export function gtag_report_conversion_form(value: number = 5000) {
  pushToDataLayer({
    event: 'conversion',
    conversion_type: 'form_submit',
    conversion_id: GA_TRACKING_ID,
    conversion_label: conversionIds.form_submit,
    send_to: `${GA_TRACKING_ID}/${conversionIds.form_submit}`,
    event_category: 'engagement',
    event_label: 'form_submission',
    value: value,
    currency: 'CLP',
  })
  
  return false
}

/**
 * Función para conversiones de llamada con un clic (Llamar con un clic)
 * Esta conversión tiene valor dinámico
 */
export function gtag_report_conversion_call_click(url?: string) {
  pushToDataLayer({
    event: 'conversion',
    conversion_type: 'call_click_ads',
    conversion_id: GA_TRACKING_ID,
    conversion_label: 'pFxkCT_rzLMbEXvcOmpQ_',
    send_to: `${GA_TRACKING_ID}/pFxkCT_rzLMbEXvcOmpQ_`,
    event_category: 'engagement',
    event_label: 'phone_call_click',
    value: 1.0,
    currency: 'CLP',
  })

  // Callback para redirección
  if (url) {
    setTimeout(() => {
      window.location.href = url
    }, 300)
  }
  
  return false
}

/**
 * Registra una conversión en Google Ads (método genérico)
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

  pushToDataLayer({
    event: 'conversion',
    conversion_type: event,
    conversion_id: GA_TRACKING_ID,
    conversion_label: conversionLabel,
    send_to: `${GA_TRACKING_ID}/${conversionLabel}`,
    event_category: 'engagement',
    event_label: event,
    value: value || 1.0,
    currency: 'CLP',
  })

  if (callback) {
    setTimeout(callback, 300)
  }
}

/**
 * Log de pageview (opcional)
 */
export const pageview = (url: string) => {
  pushToDataLayer({
    event: 'page_view',
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
  })
}
