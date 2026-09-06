import type { Metadata } from 'next'
import { EMPRESA, PROMESAS } from '../../../lib/constants'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description:
    'Condiciones de cotización, plazos de importación, garantía y devoluciones de PartsMR.',
  alternates: { canonical: '/legal/terminos' },
}

// Los plazos, la garantia y el periodo de devolucion se leen de constants, la
// misma fuente que alimenta la barra de confianza y el FAQ. Si esas promesas
// cambian, cambian aqui tambien: un documento legal que contradice lo que
// promete la portada es peor que no tenerlo.
export default function Terminos() {
  return (
    <>
      <h1>Términos y Condiciones</h1>
      <p className="!text-sm !text-gray-500">
        Última actualización: septiembre de 2026
      </p>

      <p>
        Estas condiciones regulan el uso del sitio de {EMPRESA.nombre}, RUT {EMPRESA.rut}, y
        las cotizaciones solicitadas a través de él.
      </p>

      <h2>Naturaleza de las cotizaciones</h2>
      <p>
        Las solicitudes enviadas desde este sitio son una petición de cotización, no una
        compra. No generan obligación de compra para ti ni de venta para nosotros mientras no
        exista una cotización formal aceptada por ambas partes.
      </p>
      <p>
        Los precios se confirman en la cotización que te enviamos y tienen la vigencia que allí
        se indique. Están sujetos a disponibilidad del proveedor y a variaciones de tipo de
        cambio, flete internacional y derechos de importación.
      </p>

      <h2>Plazos de entrega</h2>
      <p>
        El plazo referencial de importación es de {PROMESAS.plazoImportacion} contados desde la
        confirmación del pedido. Es una estimación: puede variar por disponibilidad en origen,
        tiempos de aduana, transporte internacional o factores de fuerza mayor. Te informaremos
        si el plazo de tu pedido difiere de esa estimación.
      </p>

      <h2>Garantía</h2>
      <p>
        Los repuestos que despachamos cuentan con {PROMESAS.garantia} de garantía por defectos
        de fabricación, contados desde la recepción. La garantía no cubre:
      </p>
      <ul>
        <li>Desgaste normal por uso.</li>
        <li>Instalación incorrecta o realizada por terceros no calificados.</li>
        <li>Daños por uso distinto al previsto para la pieza, sobrecarga o falta de mantención.</li>
        <li>Piezas modificadas o intervenidas después de la entrega.</li>
      </ul>
      <p>
        Para hacerla efectiva, escríbenos a{' '}
        <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a> con la factura y una
        descripción del problema.
      </p>

      <h2>Devoluciones</h2>
      <p>
        Dispones de {PROMESAS.devolucion} desde la recepción para solicitar la devolución de un
        repuesto que no hayas usado y que conserve su embalaje original. Los costos de envío de
        la devolución son de cargo del comprador, salvo que se trate de un error nuestro en el
        despacho.
      </p>
      <p>
        Las piezas fabricadas o importadas a pedido según especificación del cliente no admiten
        devolución, salvo defecto de fabricación.
      </p>

      <h2>Responsabilidad sobre la pieza solicitada</h2>
      <p>
        La correcta identificación del repuesto es responsabilidad compartida. Te pedimos
        entregar los datos del equipo con la mayor precisión posible: marca, modelo, año y, de
        preferencia, número de parte o de serie. Ofrecemos asesoría técnica para ayudarte a
        identificarla, pero la confirmación final de compatibilidad corresponde al cliente
        antes de aprobar el pedido.
      </p>

      <h2>Marcas de terceros</h2>
      <p>
        Los nombres y logotipos de fabricantes que aparecen en este sitio pertenecen a sus
        respectivos titulares y se utilizan únicamente para indicar la compatibilidad o el
        origen de los repuestos. Su presencia no implica afiliación, patrocinio ni
        representación oficial de esas marcas, salvo que se indique expresamente.
      </p>

      <h2>Cobertura</h2>
      <p>
        Despachamos a Chile, Perú, Bolivia, Argentina, Paraguay y Estados Unidos. Los costos,
        plazos y trámites de importación varían según destino y se detallan en cada cotización.
      </p>

      <h2>Legislación aplicable</h2>
      <p>
        Estas condiciones se rigen por la legislación chilena. Cualquier controversia se
        someterá a los tribunales competentes de Chile, sin perjuicio de los derechos que la
        ley del consumidor reconozca en el país de destino.
      </p>
    </>
  )
}
