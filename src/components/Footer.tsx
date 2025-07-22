'use client'

import {
  PhoneCall,
  Wrench,
  Truck,
  Home,
  Info,
  PackageSearch,
  SendHorizontal
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Columna 1: Branding */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            PartsMR <span className="text-orange-500">⚙️</span>
          </h1>
          <p className="text-sm text-gray-400">
            Todos tus repuestos en un solo lugar.
          </p>
          <div className="mt-4">
            <p className="flex items-center gap-2 text-orange-500 font-semibold">
              <PhoneCall className="w-5 h-5" /> Llámanos
            </p>
            <a
              href="tel:+56928423774"
              className="text-lg font-bold text-white hover:text-orange-400 transition"
            >
              +56 9 2842 3774
            </a>
          </div>
        </div>

        {/* Columna 2: Servicios */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-orange-500" /> Servicios
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>– Reparación de componentes</li>
            <li>– Reparación de Equipos (Overhaul / semi)</li>
            <li>– Acreditación minera</li>
            <li>– Fortificación de baldes</li>
          </ul>
        </div>

        {/* Columna 3: Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <SendHorizontal className="w-5 h-5 text-orange-500" /> Navegación
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-orange-400 transition flex items-center gap-2">
              <Home className="w-4 h-4" /> Home
            </li>
            <li className="hover:text-orange-400 transition flex items-center gap-2">
              <Info className="w-4 h-4" /> Sobre Nosotros
            </li>
            <li className="hover:text-orange-400 transition flex items-center gap-2">
              <PackageSearch className="w-4 h-4" /> Productos
            </li>
            <li className="hover:text-orange-400 transition flex items-center gap-2">
              <Wrench className="w-4 h-4" /> Servicios
            </li>
            <li className="hover:text-orange-400 transition flex items-center gap-2">
              <SendHorizontal className="w-4 h-4" /> Contáctanos
            </li>
          </ul>
        </div>
      </div>

      {/* Separador visual */}
      <hr className="my-10 border-zinc-700" />

      {/* Derechos reservados */}
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PartsMR. Todos los derechos reservados.
      </div>
    </footer>
  )
}
