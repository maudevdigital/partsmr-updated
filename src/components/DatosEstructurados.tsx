import { FAQS } from '../data/faqs'

// Datos estructurados (JSON-LD) para Google.
//
// Cubren tres cosas que el sitio no declaraba:
//  - Organization: quien es la empresa, como contactarla y donde opera. Es lo
//    que alimenta el panel de marca en los resultados.
//  - WebSite: habilita que Google muestre el nombre del sitio correctamente.
//  - FAQPage: puede hacer que las preguntas aparezcan desplegables en el
//    resultado de busqueda, ocupando mas espacio que un resultado normal.
//
// Las preguntas se leen de src/data/faqs.ts, la misma fuente que renderiza el
// acordeon visible: el marcado debe coincidir con lo que el usuario ve.

const PAISES = ['CL', 'PE', 'BO', 'AR', 'PY', 'US']

const organizacion = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PartsMR',
  url: 'https://www.partsmr.com',
  logo: 'https://www.partsmr.com/icon.png',
  description:
    'Importación y venta de repuestos para maquinaria pesada, camiones, autos y camionetas, con despacho a Latinoamérica.',
  email: 'ventas@partsmr.com',
  areaServed: PAISES.map((c) => ({ '@type': 'Country', identifier: c })),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+56928423774',
      contactType: 'sales',
      areaServed: 'CL',
      availableLanguage: ['es'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+595992110955',
      contactType: 'sales',
      areaServed: 'PY',
      availableLanguage: ['es'],
    },
  ],
}

const sitio = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PartsMR',
  url: 'https://www.partsmr.com',
  inLanguage: 'es-CL',
}

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ pregunta, respuesta }) => ({
    '@type': 'Question',
    name: pregunta,
    acceptedAnswer: { '@type': 'Answer', text: respuesta },
  })),
}

export default function DatosEstructurados() {
  return (
    <>
      {[organizacion, sitio, faqPage].map((bloque, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bloque) }}
        />
      ))}
    </>
  )
}
