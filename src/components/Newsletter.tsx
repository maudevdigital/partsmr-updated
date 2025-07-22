'use client'

import { Mail } from 'lucide-react'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSuccess(true)
    setEmail('')
    setTimeout(() => setSuccess(false), 4000)
  }

  return (
    <section className="bg-zinc-900 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Izquierda */}
        <div className="flex items-center text-white text-xl font-semibold gap-3">
          <Mail className="w-6 h-6 text-orange-500" />
          <span>Recibe descuentos especiales</span>
        </div>

        {/* Derecha */}
        <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
          <input
            type="email"
            required
            placeholder="Tu correo electrónico"
            className="w-full md:w-80 px-4 py-3 rounded-l-md bg-white text-gray-900 placeholder-gray-500 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 rounded-r-md transition"
          >
            Suscribirse
          </button>
        </form>
      </div>

      {success && (
        <div className="text-center text-green-400 font-medium mt-4">
          ¡Te has suscrito exitosamente!
        </div>
      )}
    </section>
  )
}
