'use client'

import { useForm } from 'react-hook-form'
import { useRef, useState } from 'react'
import { Truck, Car, PackageCheck, Check, Zap, Mail } from 'lucide-react'
import IconExcavadora from './ui/IconExcavadora'
import * as Select from '@radix-ui/react-select'
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid'
import { trackConversion } from '../lib/gtag'
import { Montserrat } from 'next/font/google'
import { marcasPorTipo, OTRA_MARCA } from '../data/marcas'
import { modelosPorMarca } from '../data/modelos'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

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
  const marcaSeleccionada = watch('marca')
  const marcasDisponibles = marcasPorTipo(tipoSeleccionado)
  const modelosSugeridos = modelosPorMarca(marcaSeleccionada)
  const mensaje = watch('mensaje') || ''
  const [pais, setPais] = useState<typeof paises[number] | null>(null)
  const [telefono, setTelefono] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [confirmacion, setConfirmacion] = useState('')
  const [honeypot, setHoneypot] = useState('') // Honeypot field
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
    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      console.log('Bot detected via honeypot')
      return // Silently reject
    }

    if (!pais) {
      alert('Selecciona un país antes de continuar.')
      return
    }

    const raw = telefono.replace(/\D/g, '')
    if (raw.length !== pais.length) {
      alert(`El número debe tener ${pais.length} dígitos para ${pais.nombre}.`)
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

    // Si la marca no estaba en el catalogo, lo que vale es lo que escribio el
    // cliente. Se envia una sola 'marca' para que el correo y el registro
    // queden legibles, sin un "Otra" suelto.
    const { marcaOtra, ...datosSinMarcaOtra } = cleanedData
    const marcaFinal =
      cleanedData.marca === 'Otra' && marcaOtra ? marcaOtra : cleanedData.marca

    const formData = {
      ...datosSinMarcaOtra,
      marca: marcaFinal,
      telefono: `${pais.codigo} ${telefono}`,
      pais: pais.nombre,
      website: honeypot, // Include honeypot field for backend validation
    }

    try {
      setLoading(true)

      const res = await fetch('/api/send-cotizacion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Error al enviar correo')

      // Registrar conversión en Google Ads
      trackConversion('form_submit', 5000)

      setConfirmacion('¡Cotización solicitada con éxito!')
      setSuccess(true)
      setEnviado(true)
      reset()
      setTelefono('')
      setPais(null)
      setHoneypot('') // Reset honeypot

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
  <section id="contacto" className={`${montserrat.className} bg-white text-gray-900 py-16 px-4`}>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
      {/* Lado izquierdo */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-orange-500 text-sm font-semibold">Equipo disponible ahora</p>
        </div>
        <h2 className="text-4xl font-bold text-[#0f172a]">¿Buscas un repuesto?</h2>
        <p className="text-lg text-gray-700">
          Completa el formulario y nos pondremos en contacto contigo a la brevedad. Trabajamos con repuestos para:
        </p>
        <ul className="text-base text-gray-800 space-y-3">
          <li className="flex items-center gap-3"><Car className="text-orange-500 w-5 h-5" /> Vehículos Livianos</li>
          <li className="flex items-center gap-3"><Truck className="text-orange-500 w-5 h-5" /> Camiones y transporte</li>
          <li className="flex items-center gap-3"><IconExcavadora className="text-orange-500 w-5 h-5" /> Maquinaria pesada y tolvas</li>
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
        
        {/* Trust indicators */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-orange-600">🔒 Información segura:</span> Tus datos están protegidos y solo serán usados para cotizaciones.
          </p>
        </div>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-4 border-2 border-orange-100">
        {/* Badge de urgencia */}
        <div className="sm:col-span-2 -mt-4 -mx-4 mb-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-t-xl text-center">
          <p className="text-sm font-medium flex items-center justify-center gap-2">
            <Zap className="w-4 h-4" />
            Respuesta garantizada en menos de 24 horas
          </p>
        </div>
        {/* Tipo de carrocería */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium mb-1 text-[#0f172a]">
            ¿Para qué tipo de carrocería necesitas? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-3 flex-wrap">
            {[
              { value: 'auto', label: 'Auto', icon: <Car className="w-4 h-4" /> },
              { value: 'camion', label: 'Camión', icon: <Truck className="w-4 h-4" /> },
              { value: 'maquinaria', label: 'Maquinaria', icon: <IconExcavadora className="w-4 h-4" /> },
            ].map((tipo) => (
              <button
                key={tipo.value}
                type="button"
                onClick={() => {
                  setValue('tipo', tipo.value, { shouldValidate: true })
                  // Las marcas dependen del tipo: una marca de auto no aplica a maquinaria.
                  setValue('marca', '')
                  setValue('marcaOtra', '')
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition ${
                  tipoSeleccionado === tipo.value
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white text-zinc-700 border-zinc-300 hover:border-orange-400'
                }`}
              >
                {tipo.icon}
                {tipo.label}
              </button>
            ))}
          </div>
          {errors.tipo && (
            <p className="text-red-500 text-sm mt-2 font-medium">⚠️ Selecciona un tipo de carrocería para continuar</p>
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
          <Select.Root 
            value={pais?.nombre} 
            onValueChange={(val) => {
              const selectedPais = paises.find(p => p.nombre === val)
              setPais(selectedPais || null)
              setTelefono('')
            }}
          >
            <Select.Trigger className="relative w-full cursor-default rounded-lg bg-white border border-gray-300 py-3 pl-4 pr-10 text-left shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent">
              <Select.Value placeholder="Selecciona tu país" />
              <Select.Icon className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className="overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <Select.Viewport className="p-1">
                  {paises.map((paisItem) => (
                    <Select.Item
                      key={paisItem.nombre}
                      value={paisItem.nombre}
                      className="relative flex items-center px-8 py-2 rounded-md text-sm text-gray-900 cursor-pointer select-none hover:bg-indigo-100 hover:text-indigo-900 focus:bg-indigo-100 focus:text-indigo-900 outline-none"
                    >
                      <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                        <CheckIcon className="h-4 w-4 text-indigo-600" />
                      </Select.ItemIndicator>
                      <Select.ItemText>{paisItem.nombre}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
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
        <div className="sm:col-span-2">
          <label className="text-sm font-medium mb-1 text-[#0f172a]">Marca</label>
          <Select.Root
            value={marcaSeleccionada || undefined}
            disabled={!tipoSeleccionado}
            onValueChange={(val) => {
              setValue('marca', val, { shouldValidate: true })
              if (val !== OTRA_MARCA) setValue('marcaOtra', '')
            }}
          >
            <Select.Trigger
              className={`relative w-full cursor-default rounded-lg bg-white border border-gray-300 py-3 pl-4 pr-10 text-left shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent ${
                !tipoSeleccionado ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            >
              <Select.Value
                placeholder={
                  tipoSeleccionado
                    ? 'Selecciona la marca'
                    : 'Primero elige el tipo de carrocería'
                }
              />
              <Select.Icon className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className="overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <Select.Viewport className="p-1 max-h-72">
                  {marcasDisponibles.map((m) => (
                    <Select.Item
                      key={m}
                      value={m}
                      className="relative flex items-center px-8 py-2 rounded-md text-sm text-gray-900 cursor-pointer select-none hover:bg-indigo-100 hover:text-indigo-900 focus:bg-indigo-100 focus:text-indigo-900 outline-none"
                    >
                      <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                        <CheckIcon className="h-4 w-4 text-indigo-600" />
                      </Select.ItemIndicator>
                      <Select.ItemText>{m}</Select.ItemText>
                    </Select.Item>
                  ))}
                  {/* Salida para marcas fuera del catalogo: no perdemos la cotizacion. */}
                  <Select.Item
                    value={OTRA_MARCA}
                    className="relative flex items-center px-8 py-2 rounded-md text-sm text-gray-600 italic cursor-pointer select-none hover:bg-indigo-100 hover:text-indigo-900 focus:bg-indigo-100 outline-none"
                  >
                    <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                      <CheckIcon className="h-4 w-4 text-indigo-600" />
                    </Select.ItemIndicator>
                    <Select.ItemText>Otra marca…</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
          <input type="hidden" {...register('marca', { required: true })} />
          {errors.marca && (
            <p className="text-red-500 text-sm mt-2 font-medium">⚠️ Selecciona la marca</p>
          )}
        </div>

        {marcaSeleccionada === OTRA_MARCA && (
          <input
            {...register('marcaOtra', { required: true })}
            required
            placeholder="¿Cuál marca?"
            className={`${inputStyle} sm:col-span-2`}
          />
        )}

        <div>
          <input
            {...register('modelo')}
            required
            placeholder={
              modelosSugeridos.length ? `Modelo (ej: ${modelosSugeridos[0]})` : 'Modelo'
            }
            list={modelosSugeridos.length ? 'modelos-sugeridos' : undefined}
            autoComplete="off"
            className={inputStyle}
          />
          {/* Sugerencias, no lista cerrada: el campo sigue aceptando cualquier
              modelo que el cliente escriba. */}
          {modelosSugeridos.length > 0 && (
            <datalist id="modelos-sugeridos">
              {modelosSugeridos.map((m) => (
                <option key={m} value={m} />
              ))}
            </datalist>
          )}
        </div>
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

          {/* Honeypot field - hidden from users, visible to bots */}
          <div className="absolute left-[-9999px]" aria-hidden="true">
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
        </div>

        {/* Botón */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={mensaje.length < 20 || loading}
            className={`w-full font-semibold py-4 px-6 rounded-md flex items-center justify-center transition shadow-lg ${
              mensaje.length < 20 || loading
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : success
                ? 'bg-green-500 text-white'
                : 'bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-[1.02]'
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Enviando...
              </span>
            ) : success ? (
              <span className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                ¡Enviado con éxito!
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Obtener Cotización Gratis
              </span>
            )}
          </button>
          
          {enviado && (
            <p className="text-sm text-green-600 mt-2 font-medium text-center">{confirmacion}</p>
          )}
          
          {!enviado && (
            <p className="text-xs text-gray-500 mt-3 text-center">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
              {(() => {
                const now = new Date()
                const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000)
                const seed = dayOfYear + now.getFullYear()
                return ((seed * 13 + 5) % 7) + 3
              })()} personas cotizaron hoy
            </p>
          )}
        </div>
      </form>
    </div>
  </section>
)
}