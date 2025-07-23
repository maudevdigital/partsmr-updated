'use client'

import { useForm } from 'react-hook-form'
import { useRef, useState, Fragment } from 'react'
import { Truck, Car, PackageCheck } from 'lucide-react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

const paises = [
  { nombre: 'Chile', codigo: '+56', placeholder: '9 1234 5678', length: 9 },
  { nombre: 'USA', codigo: '+1', placeholder: '123 456 7890', length: 10 },
  { nombre: 'Paraguay', codigo: '+595', placeholder: '961 123 456', length: 9 },
  { nombre: 'Bolivia', codigo: '+591', placeholder: '712 34567', length: 8 },
  { nombre: 'Perú', codigo: '+51', placeholder: '912 345 678', length: 9 },
  { nombre: 'Argentina', codigo: '+54', placeholder: '11 2345 6789', length: 10 },
]

const DumpTruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f97316" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h2.25l2.25-3H12v3h5.25l2.25 3H21m-18.75 0a1.5 1.5 0 003 0m12 0a1.5 1.5 0 003 0m-15 0h15" />
  </svg>
)

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm()
  const tipoSeleccionado = watch('tipo')
  const mensaje = watch('mensaje') || ''
  const [pais, setPais] = useState<any>(null)
  const [telefono, setTelefono] = useState('')
  const [enviado, setEnviado] = useState(false)
  const tipoRepuestoRef = useRef<HTMLInputElement>(null)

  const formatPhone = (input: string) => {
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

  const onSubmit = (data: any) => {
    const raw = telefono.replace(/\D/g, '')
    if (!pais || raw.length !== pais.length) {
      alert(`El número debe tener ${pais?.length || '?'} dígitos para ${pais?.nombre || 'el país seleccionado'}.`)
      return
    }

    data.telefono = `${pais.codigo} ${telefono}`

    setEnviado(true)
    reset()
    setTelefono('')
    setPais(null)
    setTimeout(() => setEnviado(false), 5000)
  }

  const inputStyle =
    'w-full p-3 rounded-md bg-white text-black placeholder-gray-500 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition'

  return (
    <section id="contacto" className="bg-[#f9fafb] text-gray-900 py-16 px-4 font-montserrat">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Izquierda */}
        <div className="space-y-6">
          <p className="text-orange-500 text-sm font-semibold">Estamos Aquí para Ayudar</p>
          <h2 className="text-4xl font-bold text-[#0f172a]">¿Buscas un repuesto?</h2>
          <p className="text-lg text-gray-700">
            Completa el formulario y nos pondremos en contacto contigo a la brevedad. Trabajamos con repuestos para:
          </p>
          <ul className="text-base text-gray-800 space-y-3">
            <li className="flex items-center gap-3"><Car className="text-orange-500 w-5 h-5" /> Vehículos Livianos</li>
            <li className="flex items-center gap-3"><Truck className="text-orange-500 w-5 h-5" /> Camiones y transporte</li>
            <li className="flex items-center gap-3"><DumpTruckIcon /> Maquinaria pesada y tolvas</li>
          </ul>
          <div className="border-t border-zinc-200 pt-6">
            <h3 className="text-lg font-semibold text-[#0f172a] mb-2 flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-orange-500" /> Ventajas
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Envíos a todo Chile</li>
              <li>✓ Atención rápida y personalizada</li>
              <li>✓ Asesoría técnica según tu equipo</li>
            </ul>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Tipo */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1 text-[#0f172a]">¿Qué tipo necesitas?</label>
            <div className="flex gap-3 flex-wrap">
              {[
                { value: 'auto', label: 'Auto', icon: <Car className="w-4 h-4" /> },
                { value: 'camion', label: 'Camión', icon: <Truck className="w-4 h-4" /> },
                { value: 'maquinaria', label: 'Maquinaria', icon: <DumpTruckIcon /> },
              ].map((tipo) => (
                <button
                  key={tipo.value}
                  type="button"
                  onClick={() => setValue('tipo', tipo.value)}
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
          </div>

          <input {...register('nombre', { required: true })} placeholder="Nombre" className={inputStyle} />
          <input {...register('apellido', { required: true })} placeholder="Apellido" className={inputStyle} />
          <input {...register('correo', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })} placeholder="Correo Electrónico" type="email" className={inputStyle} />

          {/* País */}
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
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {paisItem.nombre}
                            </span>
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

          {/* Teléfono */}
          {pais && (
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-[#0f172a] mb-1">Teléfono</label>
              <div className="flex items-center gap-2">
                <span className="px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg text-gray-700 text-sm select-none">
                  {pais.codigo}
                </span>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9\s]*"
                  value={telefono}
                  onChange={(e) => setTelefono(formatPhone(e.target.value))}
                  required
                  className="flex-1 border border-gray-300 rounded-lg p-3 text-gray-700 w-full"
                  placeholder={pais.placeholder}
                />
              </div>
            </div>
          )}

          <input {...register('marca', { required: true })} placeholder="Marca" className={inputStyle} />
          <input {...register('modelo', { required: true })} placeholder="Modelo" className={inputStyle} />
          <input {...register('chasis')} placeholder="N° de Chasis / Serie" className={inputStyle} />
          <input
            {...register('año', { pattern: /^[0-9]{4}$/ })}
            placeholder="Año"
            maxLength={4}
            inputMode="numeric"
            className={inputStyle}
            onChange={handleAñoChange}
          />
          <input {...register('tipoRepuesto')} placeholder="Tipo de Repuesto" className={inputStyle} ref={tipoRepuestoRef} />

          <div className="sm:col-span-2">
            <textarea
              {...register('mensaje', {
                required: 'Este campo es obligatorio',
                minLength: {
                  value: 20,
                  message: 'El mensaje debe tener al menos 20 caracteres',
                },
              })}
              placeholder="Escribe tu mensaje aquí"
              className="h-32 resize-none p-3 rounded-md bg-white text-black placeholder-gray-500 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition w-full"
            />
            <div className="text-sm mt-1 flex justify-between items-center text-gray-500">
              <span>Caracteres restantes: {Math.max(0, 20 - mensaje.length)}</span>
              {errors.mensaje?.message && typeof errors.mensaje.message === 'string' && (
                <span className="text-red-500">{errors.mensaje.message}</span>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={mensaje.length < 20}
              className={clsx(
                'w-full font-semibold py-3 px-6 rounded-md transition',
                mensaje.length < 20
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              )}
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
