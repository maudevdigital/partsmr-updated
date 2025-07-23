'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Mail, PhoneCall, MapPin, Clock, Star } from 'lucide-react'
import clsx from 'clsx'
import { db } from '../../lib/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

export default function ContactoPage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const mensaje = watch('comentario') || ''
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [enviado, setEnviado] = useState(false)
  const maxCaracteres = 300

  const onSubmit = async (data: any) => {
    if (rating === 0) {
      alert('Por favor selecciona una calificación.')
      return
    }

    const reseñaCompleta = {
      ...data,
      calificacion: rating,
      fecha: serverTimestamp(),
    }

    try {
      await addDoc(collection(db, 'reseñas'), reseñaCompleta)
      console.log('Reseña enviada:', reseñaCompleta)

      setEnviado(true)
      reset()
      setRating(0)
      setHover(0)
      setTimeout(() => setEnviado(false), 4000)
    } catch (error) {
      console.error('Error al guardar reseña:', error)
      alert('Hubo un problema al enviar tu reseña. Intenta nuevamente.')
    }
  }

  return (
    <main className="bg-[#f9fafb] text-[#0f172a] font-montserrat">
      {/* Sección de contacto */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Contáctanos
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            ¿Tienes dudas, necesitas una cotización o soporte? Estamos aquí para ayudarte.
            Nuestro equipo responderá a la brevedad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info de contacto */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <PhoneCall className="text-orange-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Teléfono</h3>
                <p className="text-gray-700">+56 9 2842 3774</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-orange-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Correo electrónico</h3>
                <p className="text-gray-700">christian@partsmr.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-orange-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Dirección</h3>
                <p className="text-gray-700">Santiago de Chile, Región Metropolitana</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-orange-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Horario de atención</h3>
                <p className="text-gray-700">Lunes a Viernes: 09:00 - 18:00 hrs</p>
                <p className="text-gray-700">Sábado: 09:00 - 13:00</p>
                <p className="text-gray-700">Domingo y festivos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="rounded-xl overflow-hidden shadow-md border border-zinc-200 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.7805283529953!2d-70.64826908479817!3d-33.45694038077405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c58c6e3fa3df%3A0x7358df894bd9db95!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1710286475623!5m2!1ses-419!2scl"
              width="100%"
              height="350"
              loading="lazy"
              allowFullScreen
              className="border-0 w-full h-[300px] sm:h-[350px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Sección de reseña */}
      <section className="bg-white border-t border-zinc-200 py-20 px-4 sm:px-8 md:px-16">
        <div className="max-w-3xl mx-auto bg-[#f9fafb] rounded-xl shadow-md border border-zinc-100 p-8 sm:p-12">
          <h2 className="text-3xl font-extrabold text-center mb-2">Déjanos tu opinión</h2>
          <p className="text-center text-gray-600 mb-6">
            Valoramos tu experiencia con PartsMR. Comparte tus comentarios para ayudarnos a mejorar.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                {...register('nombre', { required: 'El nombre es obligatorio' })}
                type="text"
                placeholder="Tu nombre"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                {...register('correo', {
                  required: 'El correo es obligatorio',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Correo inválido',
                  },
                })}
                type="email"
                placeholder="Tu correo"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setRating(i)}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(0)}
                  className="transition"
                >
                  <Star
                    className={clsx(
                      'w-6 h-6',
                      (hover || rating) >= i ? 'text-orange-500 fill-orange-500' : 'text-gray-300'
                    )}
                    fill={(hover || rating) >= i ? '#f97316' : 'none'}
                  />
                </button>
              ))}
            </div>
            {rating === 0 && (
              <p className="text-sm text-red-500 text-center -mt-2">Selecciona una calificación</p>
            )}

            <div>
              <textarea
                {...register('comentario', {
                  required: 'Este campo es obligatorio',
                  minLength: {
                    value: 20,
                    message: 'Tu comentario debe tener al menos 20 caracteres',
                  },
                  maxLength: {
                    value: maxCaracteres,
                    message: `Máximo ${maxCaracteres} caracteres`,
                  },
                })}
                placeholder="Escribe tu experiencia..."
                maxLength={maxCaracteres}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              ></textarea>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{mensaje.length} / {maxCaracteres} caracteres</span>
                {errors.comentario?.message && (
                  <span className="text-red-500">{String(errors.comentario.message)}</span>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={mensaje.length < 20 || rating === 0}
              className={clsx(
                'w-auto mx-auto block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition',
                mensaje.length < 20 || rating === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              )}
            >
              Enviar reseña
            </button>

            {enviado && (
              <p className="text-sm text-green-600 mt-4 text-center font-medium">
                ¡Gracias por tu reseña!
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}
