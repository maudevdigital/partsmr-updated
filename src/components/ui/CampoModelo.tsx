'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

// Campo de modelo con sugerencias.
//
// Reemplaza al <datalist> nativo: ese control lo dibuja el navegador con su
// propio estilo (fondo oscuro, esquinas rectas, tipografia del sistema) y no
// admite CSS, por lo que chocaba con los desplegables del resto del formulario.
// Este replica las clases de los Select para que el formulario se vea como una
// sola pieza.
//
// Sigue aceptando texto libre: los modelos son miles y una lista cerrada
// dejaria fuera cotizaciones legitimas. Las sugerencias solo agilizan.

type Props = {
  valor: string
  sugerencias: string[]
  onCambio: (valor: string) => void
  className?: string
}

export default function CampoModelo({ valor, sugerencias, onCambio, className }: Props) {
  const [abierto, setAbierto] = useState(false)
  const contenedor = useRef<HTMLDivElement>(null)

  // Cerrar al hacer clic fuera; sin esto la lista queda colgada al pasar a otro
  // campo del formulario.
  useEffect(() => {
    if (!abierto) return
    const alClicar = (e: MouseEvent) => {
      if (!contenedor.current?.contains(e.target as Node)) setAbierto(false)
    }
    document.addEventListener('mousedown', alClicar)
    return () => document.removeEventListener('mousedown', alClicar)
  }, [abierto])

  const filtradas = valor
    ? sugerencias.filter((s) => s.toLowerCase().includes(valor.toLowerCase()))
    : sugerencias

  const hayLista = sugerencias.length > 0 && filtradas.length > 0

  return (
    <div ref={contenedor} className="relative">
      <input
        value={valor}
        onChange={(e) => {
          onCambio(e.target.value)
          setAbierto(true)
        }}
        onFocus={() => setAbierto(true)}
        onKeyDown={(e) => e.key === 'Escape' && setAbierto(false)}
        placeholder={
          sugerencias.length ? `Modelo (opcional, ej: ${sugerencias[0]})` : 'Modelo (opcional)'
        }
        autoComplete="off"
        className={className}
      />

      {abierto && hayLista && (
        <div className="absolute z-50 mt-1.5 w-full overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200">
          <ul className="p-1 max-h-60 overflow-y-auto">
            {filtradas.map((s) => (
              <li key={s}>
                <button
                  type="button"
                  onClick={() => {
                    onCambio(s)
                    setAbierto(false)
                  }}
                  className="relative w-full flex items-center gap-3 pl-9 pr-3 py-2.5 rounded-md text-sm text-[#0f172a] text-left cursor-pointer select-none outline-none hover:bg-[#fff4e6] focus:bg-[#fff4e6]"
                >
                  {valor === s && (
                    <CheckIcon className="absolute left-2.5 h-4 w-4 text-[#c2410c]" />
                  )}
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
