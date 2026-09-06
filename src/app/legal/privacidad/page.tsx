import type { Metadata } from 'next'
import { EMPRESA } from '../../../lib/constants'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Cómo PartsMR recopila, usa y protege los datos personales que entregas al solicitar una cotización.',
  alternates: { canonical: '/legal/privacidad' },
}

// El contenido describe lo que el sitio hace de verdad: que campos pide el
// cotizador, donde se guardan y que terceros intervienen. Un texto generico
// copiado de una plantilla seria inexacto y, ante un reclamo, peor que no
// tener nada.
export default function Privacidad() {
  return (
    <>
      <h1>Política de Privacidad</h1>
      <p className="!text-sm !text-gray-500">
        Última actualización: septiembre de 2026
      </p>

      <p>
        Esta política explica qué datos personales recopila {EMPRESA.nombre}, con qué
        finalidad los usa y qué derechos tienes sobre ellos. Se rige por la Ley 19.628 sobre
        Protección de la Vida Privada de Chile.
      </p>

      <h2>Quién es responsable de tus datos</h2>
      <p>
        {EMPRESA.nombre}, RUT {EMPRESA.rut}. Puedes contactarnos en{' '}
        <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a> para cualquier consulta
        relacionada con tus datos personales.
      </p>

      <h2>Qué datos recopilamos</h2>
      <p>
        Solo los que entregas voluntariamente al solicitar una cotización o dejar una reseña:
      </p>
      <ul>
        <li>Nombre y apellido.</li>
        <li>Correo electrónico y número de teléfono.</li>
        <li>País desde el que nos escribes.</li>
        <li>
          Datos del vehículo o equipo: tipo, marca, modelo, año y, si lo indicas, número de
          chasis o patente.
        </li>
        <li>El mensaje o descripción del repuesto que necesitas.</li>
      </ul>
      <p>
        No solicitamos datos de tarjetas ni credenciales bancarias a través de este sitio.
      </p>

      <h2>Para qué los usamos</h2>
      <ul>
        <li>Responder tu solicitud de cotización y darle seguimiento.</li>
        <li>Contactarte por correo, teléfono o WhatsApp respecto de esa solicitud.</li>
        <li>Llevar un registro interno de las cotizaciones recibidas.</li>
      </ul>
      <p>
        No vendemos ni cedemos tus datos a terceros con fines comerciales, ni te enviamos
        publicidad no solicitada.
      </p>

      <h2>Dónde se almacenan</h2>
      <p>
        Las solicitudes se envían por correo a nuestra casilla comercial y se registran en una
        base de datos alojada en Google Cloud Firestore. El acceso está restringido: la base no
        es consultable desde el sitio web ni desde el navegador de ningún visitante.
      </p>

      <h2>Terceros que intervienen</h2>
      <ul>
        <li>
          <strong>Vercel</strong>, que aloja el sitio y procesa las solicitudes.
        </li>
        <li>
          <strong>Google Firebase</strong>, donde se registran las cotizaciones.
        </li>
        <li>
          <strong>Google Analytics y Google Ads</strong>, que recogen datos de navegación
          agregados para medir el rendimiento del sitio y de las campañas. Puedes bloquearlos
          desde la configuración de tu navegador.
        </li>
        <li>
          <strong>Hostinger</strong>, proveedor del servicio de correo.
        </li>
      </ul>

      <h2>Cuánto tiempo los conservamos</h2>
      <p>
        Conservamos las solicitudes mientras sean necesarias para la relación comercial y para
        cumplir obligaciones legales o tributarias. Puedes pedir su eliminación en cualquier
        momento.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes solicitar acceso a tus datos, su rectificación si están errados, o su
        eliminación. Escríbenos a{' '}
        <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a> indicando tu solicitud;
        responderemos dentro de los plazos que establece la ley.
      </p>

      <h2>Cookies</h2>
      <p>
        El sitio utiliza cookies de Google Analytics y Google Ads para medir visitas y
        conversiones. No usamos cookies para identificarte personalmente. Puedes desactivarlas
        en tu navegador sin que ello afecte el uso del sitio ni tu posibilidad de cotizar.
      </p>

      <h2>Cambios en esta política</h2>
      <p>
        Si modificamos esta política, actualizaremos la fecha del encabezado. Te recomendamos
        revisarla periódicamente.
      </p>
    </>
  )
}
