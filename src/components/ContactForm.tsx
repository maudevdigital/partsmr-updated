'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Truck, Car, Loader2, Mail, PackageCheck, Phone } from 'lucide-react'

type FormData = {
  tipo: 'auto' | 'maquinaria' | 'camion'
  nombre: string
  apellido: string
  correo: string
  telefono: string
  marca: string
  modelo: string
  chasis?: string
  año?: string
  tipoRepuesto?: string
  mensaje: string
}

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const [enviado, setEnviado] = useState(false)

  const onSubmit = () => {
    setEnviado(true)
    reset()
    setTimeout(() => setEnviado(false), 5000)
  }

  const inputStyle =
    'w-full p-3 rounded-md bg-white text-black placeholder-gray-500 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition'

  return (
    <section className="bg-[#f9fafb] text-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Columna izquierda */}
        <div className="space-y-6">
          <p className="text-orange-500 text-sm font-semibold">Estamos Aquí para Ayudar</p>
          <h2 className="text-4xl font-bold text-zinc-900">¿Buscas un repuesto?</h2>
          <p className="text-lg text-gray-700">
            Completa el formulario y nos pondremos en contacto contigo a la brevedad. Trabajamos con repuestos para:
          </p>

          <ul className="text-base text-gray-800 space-y-3">
            <li className="flex items-center gap-3">
              <Car className="text-orange-500 w-5 h-5" /> Vehículos Livianos (autos, camionetas)
            </li>
            <li className="flex items-center gap-3">
              <Truck className="text-orange-500 w-5 h-5" /> Camiones y transporte pesado
            </li>
            <li className="flex items-center gap-3">
              <Loader2 className="text-orange-500 w-5 h-5" /> Maquinaria pesada e industrial
            </li>
          </ul>

          <div className="border-t border-zinc-200 pt-6">
            <h3 className="text-lg font-semibold text-zinc-900 mb-2 flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-orange-500" /> Ventajas de nuestro servicio
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Envíos a todo Chile</li>
              <li>✓ Atención rápida y personalizada</li>
              <li>✓ Asesoría técnica según tu equipo</li>
            </ul>
          </div>
        </div>

        {/* Columna derecha: formulario */}
        <form
          action="https://formsubmit.co/ventas@partsmr.com"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-xl shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* Selector */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1 text-zinc-700">¿Qué tipo necesitas?</label>
            <select
              {...register('tipo')}
              className="w-full p-3 rounded-md bg-white text-black border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="auto">Auto</option>
              <option value="maquinaria">Maquinaria</option>
              <option value="camion">Camión</option>
            </select>
          </div>

          {/* Campos estáticos */}
          <input {...register('nombre')} placeholder="Nombre" className={inputStyle} required />
          <input {...register('apellido')} placeholder="Apellido" className={inputStyle} required />
          <input {...register('correo')} placeholder="Correo Electrónico" type="email" className={inputStyle} required />
          <input {...register('telefono')} placeholder="Teléfono" className={inputStyle} required />
          <input {...register('marca')} placeholder="Marca" className={inputStyle} required />
          <input {...register('modelo')} placeholder="Modelo" className={inputStyle} required />
          <input {...register('chasis')} placeholder="N° de Chasis / Serie" className={inputStyle} />
          <input {...register('año')} placeholder="Año" className={inputStyle} />
          <input {...register('tipoRepuesto')} placeholder="Tipo de Repuesto" className={inputStyle} />

          {/* Mensaje */}
          <textarea
            {...register('mensaje')}
            placeholder="Escribe tu mensaje aquí"
            className="sm:col-span-2 h-32 resize-none p-3 rounded-md bg-white text-black placeholder-gray-500 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            required
          />

          {/* Campos ocultos para FormSubmit */}
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Nuevo mensaje desde el formulario de contacto" />
          <input type="hidden" name="_autoresponse" value="¡Gracias por contactarnos! Te responderemos pronto." />

          {/* Botón */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition"
            >
              Contáctanos
            </button>
            {enviado && (
              <p className="text-sm text-green-600 mt-2 font-medium text-center">¡Mensaje enviado con éxito!</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
