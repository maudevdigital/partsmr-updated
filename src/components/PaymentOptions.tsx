'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ClipboardCheck, Clipboard } from 'lucide-react'

const montserrat = {
  fontFamily: `'Montserrat', sans-serif`,
}

export default function PaymentOptions() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const text = `
Nombre: Inversiones y Comercializadora MR SPA
Banco: Banco de Chile
Cuenta Corriente: 00–204–04571–01
RUT: 77.878.571–4
Correo: ventas@partsmr.com
    `.trim()

    navigator.clipboard.writeText(text)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <section
      className="bg-white text-[#111827] py-20 px-4 sm:px-8 md:px-16"
      style={montserrat}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-[#FF8A00] font-bold text-sm uppercase tracking-wide">Métodos de Pago</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
          Convenientes para <span className="text-[#FF8A00]">Ti</span> disponibles
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Transferencia Bancaria */}
        <div className="bg-[#fffdf9] text-black p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200">
          <div className="mb-4">
            <Image
              src="/metodos/transferencia.webp"
              alt="Transferencia Bancaria"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>
          <h3 className="text-xl font-bold mb-4 text-center">Transferencia Bancaria</h3>
          <div className="text-sm space-y-1 mb-4">
            <p>Nombre: Inversiones y Comercializadora MR SPA</p>
            <p>Banco: Banco de Chile</p>
            <p>Cuenta Corriente: 00–204–04571–01</p>
            <p>RUT: 77.878.571–4</p>
            <p>Correo: ventas@partsmr.com</p>
          </div>
          <button
            onClick={handleCopy}
            className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-md block text-center w-fit mx-auto hover:bg-orange-600 transition flex items-center gap-2"
          >
            {copied ? (
              <>
                <ClipboardCheck className="w-5 h-5" />
                ¡Copiado!
              </>
            ) : (
              <>
                <Clipboard className="w-5 h-5" />
                Copiar datos
              </>
            )}
          </button>
        </div>

        {/* Webpay */}
        <div className="bg-[#fffdf9] text-black p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Image src="/metodos/webpay.png" alt="Webpay" width={60} height={60} />
            <Image src="/metodos/visa.png" alt="Visa" width={40} height={40} />
            <Image src="/metodos/mastercard.png" alt="Mastercard" width={40} height={40} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-center">Tarjeta de Crédito/Débito</h3>
          <p className="text-sm text-gray-700 mb-6 text-center">
            Rápido y fácil. Paga tu cotización con tu tarjeta usando Webpay. Incluye el número de
            cotización para identificar tu pago.
          </p>
          <a
            href="https://www.webpay.cl/form-pay/262952"
            className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-md block text-center w-fit mx-auto hover:bg-orange-600 transition"
          >
            Paga Ahora
          </a>
        </div>

        {/* PayPal */}
        <div className="bg-[#fffdf9] text-black p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200">
          <div className="mb-4 flex justify-center">
            <Image src="/metodos/paypal.png" alt="PayPal" width={60} height={60} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-center">PayPal</h3>
          <p className="text-sm text-gray-700 mb-6 text-center">
            Ideal para clientes internacionales. Incluye un pequeño recargo por uso del servicio. No
            olvides agregar tu número de cotización para facilitar el proceso.
          </p>
          <a
            href="#pago"
            className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-md block text-center w-fit mx-auto hover:bg-orange-600 transition"
          >
            Paga Ahora
          </a>
        </div>
      </div>
    </section>
  )
}
