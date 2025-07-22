'use client'

import Image from 'next/image'

export default function PaymentOptions() {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-[#FF8A00] font-bold text-sm">Métodos de Pago</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
          Convenientes para <span className="text-[#FF8A00]">Ti</span> disponibles
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Transferencia Bancaria */}
        <div className="bg-[#fffdf9] text-black p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="mb-4">
            <Image
              src="/metodos/transferencia.webp"
              alt="Transferencia Bancaria"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Transferencia Bancaria</h3>
          <p className="text-sm mb-1">Banco: Banco de Chile</p>
          <p className="text-sm mb-1">Cuenta Corriente: 00–204–04571–01</p>
          <p className="text-sm mb-1">RUT: 77.878.571–4</p>
          <p className="text-sm">Correo: ventas@partsmr.com</p>
        </div>

        {/* Webpay */}
        <div className="bg-[#fffdf9] text-black p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Image src="/metodos/webpay.png" alt="Webpay" width={60} height={60} />
            <Image src="/metodos/visa.png" alt="Visa" width={40} height={40} />
            <Image src="/metodos/mastercard.png" alt="Mastercard" width={40} height={40} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Tarjeta de Crédito/Débito</h3>
          <p className="text-sm text-gray-700 mb-4">
            Rápido y fácil. Paga tu cotización con tu tarjeta usando Webpay. Incluye el número de
            cotización para identificar tu pago.
          </p>
          <a
            href="#pago"
            className="bg-[#FF8A00] text-white font-semibold px-6 py-2 rounded-md block text-center w-fit mx-auto hover:bg-[#e67e00] transition"
          >
            Paga Ahora
          </a>
        </div>

        {/* PayPal */}
        <div className="bg-[#fffdf9] text-black p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="mb-4 flex justify-center">
            <Image src="/metodos/paypal.png" alt="PayPal" width={60} height={60} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">PayPal</h3>
          <p className="text-sm text-gray-700 mb-4">
            Ideal para clientes internacionales. Incluye un pequeño recargo por uso del servicio. No
            olvides agregar tu número de cotización para facilitar el proceso.
          </p>
          <a
            href="#pago"
            className="bg-[#FF8A00] text-white font-semibold px-6 py-2 rounded-md block text-center w-fit mx-auto hover:bg-[#e67e00] transition"
          >
            Paga Ahora
          </a>
        </div>
      </div>
    </section>
  )
}
