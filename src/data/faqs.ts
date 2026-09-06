// src/data/faqs.ts
// Fuente unica de las preguntas frecuentes: la usa el acordeon visible
// (FAQSection) y el JSON-LD de tipo FAQPage. No duplicar en otro lugar.

export type Faq = { pregunta: string; respuesta: string }

export const FAQS: Faq[] = [
  {
    pregunta: '¿Cómo hago un pedido?',
    respuesta: 'Simplemente solicita tu cotización por whatsapp o email.',
  },
  {
    pregunta: '¿Para qué vehículos ofrecen repuestos?',
    respuesta:
      'Ofrecemos repuestos para camiones, automóviles y maquinaria diversa, garantizando una amplia selección para todas las necesidades.',
  },
  {
    pregunta: '¿Ofrecen opciones de envío internacional?',
    respuesta:
      'Sí, hacemos envíos internacionales. Consulta a nuestros ejecutivos las políticas de envío para tiempos de entrega y países disponibles.',
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta:
      'Aceptamos tarjetas de crédito, débito y PayPal. Todos los pagos se procesan de manera segura en nuestra plataforma.',
  },
  {
    pregunta: '¿Puedo devolver repuestos si es necesario?',
    respuesta:
      'Sí. Tienes 30 días para devolver un repuesto sin usar y en su empaque original. Aparte de eso, cada pieza que despachamos incluye 6 meses de garantía por defectos de fabricación.',
  },
  {
    pregunta: '¿Cómo puedo contactar servicio al cliente?',
    respuesta:
      'Escríbenos por WhatsApp, teléfono o a ventas@partsmr.com. Atendemos de lunes a viernes de 09:00 a 18:00 (hora de Chile) y respondemos toda cotización en menos de 24 horas hábiles.',
  },
]
