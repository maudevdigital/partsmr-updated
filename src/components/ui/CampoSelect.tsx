'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

// Desplegable propio, en reemplazo de Radix Select.
//
// Radix monta RemoveScroll al abrir: bloquea el scroll del documento y compensa
// el ancho de la barra que desaparece, lo que desplazaba toda la pagina hacia
// un lado al abrir y la devolvia al cerrar. Ese comportamiento no es
// configurable en Select (no acepta la prop modal, a diferencia de Dialog).
// Este componente no bloquea el scroll, asi que no hay barra que ocultar ni
// nada que compensar, y comparte estilos con CampoModelo para que los tres
// campos del formulario se vean como uno solo.

export type OpcionSelect = {
  valor: string
  etiqueta: string
  visual?: ReactNode
  accesorio?: ReactNode
  atenuada?: boolean
}

type Props = {
  valor?: string
  opciones: OpcionSelect[]
  placeholder: string
  onCambio: (valor: string) => void
  deshabilitado?: boolean
  etiquetaAria?: string
}

export default function CampoSelect({
  valor,
  opciones,
  placeholder,
  onCambio,
  deshabilitado = false,
  etiquetaAria,
}: Props) {
  const [abierto, setAbierto] = useState(false)
  const contenedor = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!abierto) return
    const alClicar = (e: MouseEvent) => {
      if (!contenedor.current?.contains(e.target as Node)) setAbierto(false)
    }
    const alTeclear = (e: KeyboardEvent) => e.key === 'Escape' && setAbierto(false)
    document.addEventListener('mousedown', alClicar)
    document.addEventListener('keydown', alTeclear)
    return () => {
      document.removeEventListener('mousedown', alClicar)
      document.removeEventListener('keydown', alTeclear)
    }
  }, [abierto])

  const elegida = opciones.find((o) => o.valor === valor)

  return (
    <div ref={contenedor} className="relative">
      <button
        type="button"
        disabled={deshabilitado}
        aria-haspopup="listbox"
        aria-expanded={abierto}
        aria-label={etiquetaAria}
        onClick={() => !deshabilitado && setAbierto((v) => !v)}
        className={`relative w-full rounded-lg bg-white border border-gray-300 py-3 pl-4 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent ${
          deshabilitado ? 'opacity-60 cursor-not-allowed' : 'hover:border-gray-400 cursor-pointer'
        }`}
      >
        {elegida ? (
          <span className="flex items-center gap-2.5">
            {elegida.visual}
            <span className="text-[#0f172a]">{elegida.etiqueta}</span>
            {elegida.accesorio}
          </span>
        ) : (
          <span className="text-gray-500">{placeholder}</span>
        )}
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
        </span>
      </button>

      {abierto && !deshabilitado && (
        <div className="absolute z-50 mt-1.5 w-full overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200">
          <ul role="listbox" className="p-1 max-h-60 overflow-y-auto">
            {opciones.map((o) => (
              <li key={o.valor}>
                <button
                  type="button"
                  role="option"
                  aria-selected={o.valor === valor}
                  onClick={() => {
                    onCambio(o.valor)
                    setAbierto(false)
                  }}
                  className={`relative w-full flex items-center gap-3 pl-9 pr-3 py-2.5 rounded-md text-sm text-left cursor-pointer select-none outline-none hover:bg-[#fff4e6] focus:bg-[#fff4e6] ${
                    o.atenuada ? 'text-gray-600 italic' : 'text-[#0f172a]'
                  } ${o.valor === valor ? 'font-semibold' : ''}`}
                >
                  {o.valor === valor && (
                    <CheckIcon className="absolute left-2.5 h-4 w-4 text-[#c2410c]" />
                  )}
                  {o.visual}
                  <span className="truncate">{o.etiqueta}</span>
                  {o.accesorio && <span className="ml-auto shrink-0">{o.accesorio}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
