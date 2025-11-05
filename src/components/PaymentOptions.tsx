'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ClipboardCheck, Clipboard, CreditCard, Banknote, CheckCircle } from 'lucide-react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

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
      className={`${montserrat.className} bg-[#f9fafb] text-[#111827] py-20 px-4 sm:px-8 md:px-16`}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-2">
          <CreditCard className="w-5 h-5 text-[#FF8A00]" />
          <p className="text-[#FF8A00] font-bold text-sm uppercase tracking-wide">Métodos de Pago</p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Opciones <span className="text-[#FF8A00]">Convenientes</span> y Seguras
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          Elige el método que mejor se adapte a tus necesidades
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Transferencia Bancaria */}
        <div className="bg-white text-black p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200 hover:border-orange-200">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Banknote className="w-6 h-6 text-[#FF8A00]" />
            <Image
              src="/metodos/transferencia.webp"
              alt="Transferencia Bancaria"
              width={50}
              height={50}
            />
          </div>
          <h3 className="text-xl font-bold mb-4 text-center">Transferencia Bancaria</h3>
          <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-1 mb-4 border border-gray-100">
            <p><span className="font-semibold">Nombre:</span> Inversiones y Comercializadora MR SPA</p>
            <p><span className="font-semibold">Banco:</span> Banco de Chile</p>
            <p><span className="font-semibold">Cuenta Corriente:</span> 00–204–04571–01</p>
            <p><span className="font-semibold">RUT:</span> 77.878.571–4</p>
            <p><span className="font-semibold">Correo:</span> ventas@partsmr.com</p>
          </div>
          <button
            onClick={handleCopy}
            className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-md w-full hover:bg-orange-600 transition flex items-center justify-center gap-2 shadow-md"
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
        <div className="bg-white text-black p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200 hover:border-orange-200">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Image src="/metodos/webpay.webp" alt="Webpay" width={60} height={60} />
            <Image src="/metodos/visa.webp" alt="Visa" width={40} height={40} />
            <Image src="/metodos/mastercard.png" alt="Mastercard" width={40} height={40} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-center">Tarjeta de Crédito/Débito</h3>
          <p className="text-sm text-gray-700 mb-6 text-center">
            Rápido y fácil. Paga tu cotización con tu tarjeta usando Webpay. Incluye el número de
            cotización para identificar tu pago.
          </p>
          <div className="mb-4 text-center">
            <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full border border-green-200">
              <CheckCircle className="w-3 h-3" />
              Pago seguro
            </span>
          </div>
          <a
            href="https://www.webpay.cl/form-pay/262952"
            className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-md block text-center w-full hover:bg-orange-600 transition shadow-md"
          >
            Paga Ahora
          </a>
        </div>

        {/* PayPal */}
        <div className="bg-white text-black p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200 hover:border-orange-200">
          <div className="mb-4 flex justify-center">
            <Image src="/metodos/paypal.webp" alt="PayPal" width={60} height={60} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-center">PayPal</h3>
          <p className="text-sm text-gray-700 mb-4 text-center">
            Ideal para clientes internacionales. Incluye un pequeño recargo por uso del servicio. No
            olvides agregar tu número de cotización para facilitar el proceso.
          </p>
          <div className="mb-4 text-center">
            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">
              Internacional
            </span>
          </div>
          <a
            href="https://paypal.me/partsmr"
            className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-md block text-center w-full hover:bg-orange-600 transition shadow-md"
          >
            Paga Ahora
          </a>
        </div>
      </div>
    </section>
  )
}
