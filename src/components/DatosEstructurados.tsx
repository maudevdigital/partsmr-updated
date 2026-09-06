import { FAQS } from '../data/faqs'
import { EMPRESA, PAISES } from '../lib/constants'

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

const organizacion = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: EMPRESA.nombre,
  url: EMPRESA.url,
  logo: `${EMPRESA.url}/icon.png`,
  description: EMPRESA.descripcion,
  email: EMPRESA.email,
  areaServed: PAISES.map((p) => ({ '@type': 'Country', identifier: p.code })),
  contactPoint: EMPRESA.telefonos.map((t) => ({
    '@type': 'ContactPoint',
    telephone: t.e164,
    contactType: 'sales',
    areaServed: t.codigo,
    availableLanguage: ['es'],
  })),
}

const sitio = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: EMPRESA.nombre,
  url: EMPRESA.url,
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
