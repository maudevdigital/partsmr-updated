'use client'

import { useForm } from 'react-hook-form'
import { useRef, useState, Fragment } from 'react'
import { Truck, Car, PackageCheck, CircleEllipsis, Check } from 'lucide-react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import ReCAPTCHA from 'react-google-recaptcha'
import { db } from '../lib/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { gtag_report_conversion_form } from '../lib/gtag'

const montserrat = {
  fontFamily: `'Montserrat', sans-serif`,
}

const paises = [
  { nombre: 'Chile', codigo: '+56', placeholder: '9 1234 5678', length: 9 },
  { nombre: 'USA', codigo: '+1', placeholder: '123 456 7890', length: 10 },
  { nombre: 'Paraguay', codigo: '+595', placeholder: '961 123 456', length: 9 },
  { nombre: 'Bolivia', codigo: '+591', placeholder: '712 34567', length: 8 },
  { nombre: 'Perú', codigo: '+51', placeholder: '912 345 678', length: 9 },
  { nombre: 'Argentina', codigo: '+54', placeholder: '11 2345 6789', length: 10 },
]

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const tipoSeleccionado = watch('tipo')
  const mensaje = watch('mensaje') || ''
  const [pais, setPais] = useState<typeof paises[number] | null>(null)
  const [telefono, setTelefono] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [confirmacion, setConfirmacion] = useState('')
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const tipoRepuestoRef = useRef<HTMLInputElement | null>(null)

  const formatPhone = (input: string): string => {
    if (!pais) return input
    const onlyNums = input.replace(/\D/g, '').slice(0, pais.length)
    switch (pais.nombre) {
      case 'Chile':
        return onlyNums.replace(/^(\d)(\d{4})(\d{4})?$/, (_, a, b, c) => [a, b, c].filter(Boolean).join(' '))
      case 'Argentina':
      case 'USA':
        return onlyNums.replace(/^(\d{3})(\d{3})(\d{4})?$/, (_, a, b, c) => [a, b, c].filter(Boolean).join(' '))
      case 'Perú':
      case 'Paraguay':
        return onlyNums.replace(/^(\d{3})(\d{3})(\d{3})?$/, (_, a, b, c) => [a, b, c].filter(Boolean).join(' '))
      case 'Bolivia':
        return onlyNums.replace(/^(\d{3})(\d{5})?$/, (_, a, b) => [a, b].filter(Boolean).join(' '))
      default:
        return onlyNums
    }
  }

  const handleAñoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4)
    setValue('año', value)
    if (value.length === 4 && tipoRepuestoRef.current) {
      tipoRepuestoRef.current.focus()
    }
  }

  const onSubmit = async (data: any) => {
    if (!pais) {
      alert('Selecciona un país antes de continuar.')
      return
    }

    const raw = telefono.replace(/\D/g, '')
    if (raw.length !== pais.length) {
      alert(`El número debe tener ${pais.length} dígitos para ${pais.nombre}.`)
      return
    }

    if (!captchaToken) {
      alert('Por favor completa el captcha antes de enviar.')
      return
    }

    if (!data.tipo) {
      alert('Selecciona para qué tipo de carrocería necesitas.')
      return
    }

    const cleanedData: Record<string, any> = {}
    for (const key in data) {
      if (data[key] !== undefined) {
        cleanedData[key] = data[key]
      }
    }

    const formData = {
      ...cleanedData,
      telefono: `${pais.codigo} ${telefono}`,
      pais: pais.nombre,
      captchaToken,
      timestamp: serverTimestamp(),
    }

    try {
      setLoading(true)

      const res = await fetch('/api/send-cotizacion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, timestamp: undefined }),
      })

      if (!res.ok) throw new Error('Error al enviar correo')

      // Registrar conversión en Google Ads via GTM
      gtag_report_conversion_form(5000)

      setConfirmacion('¡Cotización solicitada con éxito!')
      setSuccess(true)
      setEnviado(true)
      reset()
      setTelefono('')
      setPais(null)
      setCaptchaToken(null)

      setTimeout(() => {
        setLoading(false)
        setSuccess(false)
        setEnviado(false)
        setConfirmacion('')
      }, 3000)
    } catch (error: any) {
      console.error('Error:', error?.message || error)
      setLoading(false)
      setSuccess(false)
      alert('Ocurrió un error al enviar la solicitud. Intenta nuevamente.')
    }
  }

  const inputStyle =
    'w-full p-3 rounded-md bg-white text-black placeholder-gray-500 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition'

  return (
  <section id="contacto" className="bg-[#f9fafb] text-gray-900 py-16 px-4" style={montserrat}>
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
      {/* Lado izquierdo */}
      <div className="space-y-6">
        <p className="text-orange-500 text-sm font-semibold">Estamos Aquí para Ayudar</p>
        <h2 className="text-4xl font-bold text-[#0f172a]">¿Buscas un repuesto?</h2>
        <p className="text-lg text-gray-700">
          Completa el formulario y nos pondremos en contacto contigo a la brevedad. Trabajamos con repuestos para:
        </p>
        <ul className="text-base text-gray-800 space-y-3">
          <li className="flex items-center gap-3"><Car className="text-orange-500 w-5 h-5" /> Vehículos Livianos</li>
          <li className="flex items-center gap-3"><Truck className="text-orange-500 w-5 h-5" /> Camiones y transporte</li>
          <li className="flex items-center gap-3"><CircleEllipsis className="text-orange-500 w-5 h-5" /> Maquinaria pesada y tolvas</li>
        </ul>
        <div className="border-t border-zinc-200 pt-6">
          <h3 className="text-lg font-semibold text-[#0f172a] mb-2 flex items-center gap-2">
            <PackageCheck className="w-5 h-5 text-orange-500" /> Ventajas
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Envíos internacionales</li>
            <li>✓ Atención rápida y personalizada</li>
            <li>✓ Asesoría técnica según tu equipo</li>
          </ul>
        </div>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Tipo de carrocería */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium mb-1 text-[#0f172a]">¿Para qué tipo de carrocería necesitas?</label>
          <div className="flex gap-3 flex-wrap">
            {[
              { value: 'auto', label: 'Auto', icon: <Car className="w-4 h-4" /> },
              { value: 'camion', label: 'Camión', icon: <Truck className="w-4 h-4" /> },
              { value: 'maquinaria', label: 'Maquinaria', icon: <CircleEllipsis className="w-4 h-4" /> },
            ].map((tipo) => (
              <button
                key={tipo.value}
                type="button"
                onClick={() => setValue('tipo', tipo.value, { shouldValidate: true })}
                className={clsx(
                  'flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition',
                  tipoSeleccionado === tipo.value
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white text-zinc-700 border-zinc-300 hover:border-orange-400'
                )}
              >
                {tipo.icon}
                {tipo.label}
              </button>
            ))}
          </div>
          {errors.tipo && (
            <p className="text-red-500 text-sm mt-2">Este campo es obligatorio.</p>
          )}
          <input type="hidden" {...register('tipo', { required: true })} />
        </div>

        {/* Datos personales */}
        <input {...register('nombre')} required placeholder="Nombre" className={inputStyle} />
        <input {...register('apellido')} required placeholder="Apellido" className={inputStyle} />
        <input
          {...register('correo', {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          required
          placeholder="Correo Electrónico"
          type="email"
          className={inputStyle}
        />

        {/* País y teléfono */}
        <div className="sm:col-span-2">
          <label className="text-sm font-medium mb-1 text-[#0f172a]">País</label>
          <Listbox value={pais} onChange={(val) => { setPais(val); setTelefono('') }}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white border border-gray-300 py-3 pl-4 pr-10 text-left shadow-sm">
                <span className="block truncate">{pais?.nombre || 'Selecciona tu país'}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                </span>
              </Listbox.Button>
              <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5">
                  {paises.map((paisItem) => (
                    <Listbox.Option key={paisItem.nombre} value={paisItem} className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'}`
                    }>
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{paisItem.nombre}</span>
                          {selected && (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <CheckIcon className="h-5 w-5 text-indigo-600" />
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        {pais && (
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-[#0f172a] mb-1">Teléfono</label>
            <div className="flex items-center gap-2">
              <span className="px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg text-gray-700 text-sm select-none">{pais.codigo}</span>
              <input
                type="text"
                inputMode="numeric"
                value={telefono}
                onChange={(e) => setTelefono(formatPhone(e.target.value))}
                required
                className="flex-1 border border-gray-300 rounded-lg p-3 text-gray-700 w-full"
                placeholder={pais.placeholder}
              />
            </div>
          </div>
        )}

        {/* Vehículo */}
        <input {...register('marca')} required placeholder="Marca" className={inputStyle} />
        <input {...register('modelo')} required placeholder="Modelo" className={inputStyle} />
        <input {...register('chasis')} required placeholder="N° de Chasis o Patente" className={inputStyle} />
        <input
          {...register('año', {
            pattern: {
              value: /^[0-9]{4}$/,
              message: 'Debe ser un año de 4 dígitos',
            },
          })}
          required
          placeholder="Año"
          maxLength={4}
          inputMode="numeric"
          className={inputStyle}
          onChange={handleAñoChange}
        />
        <input {...register('tipoRepuesto')} required placeholder="Tipo de Repuesto" className={inputStyle} />

        {/* Mensaje y captcha */}
        <div className="sm:col-span-2">
          <textarea
            {...register('mensaje', {
              minLength: { value: 20, message: 'El mensaje debe tener al menos 20 caracteres' },
            })}
            required
            placeholder="Escribe tu mensaje aquí"
            className="h-32 resize-none p-3 rounded-md bg-white text-black placeholder-gray-500 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition w-full"
          />
          <div className="text-sm mt-1 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-gray-500">
            <span>Caracteres restantes: {Math.max(0, 20 - mensaje.length)}</span>
            {typeof errors.mensaje?.message === 'string' && (
              <span className="text-red-500">{errors.mensaje.message}</span>
            )}
          </div>

          {/* Captcha aquí */}
          <div className="mt-4 flex justify-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>
        </div>

        {/* Botón */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={mensaje.length < 20 || !captchaToken || loading}
            className={clsx(
              'w-full font-semibold py-3 px-6 rounded-md flex items-center justify-center transition',
              mensaje.length < 20 || !captchaToken || loading
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : success
                ? 'bg-green-500 text-white'
                : 'bg-orange-500 hover:bg-orange-600 text-white'
            )}
          >
            {loading ? 'Enviando...' : success ? '¡Enviado con éxito!' : 'Contáctanos'}
          </button>
          {enviado && (
            <p className="text-sm text-green-600 mt-2 font-medium text-center">{confirmacion}</p>
          )}
        </div>
      </form>
    </div>
  </section>
)
}