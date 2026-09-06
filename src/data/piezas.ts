// src/data/piezas.ts
// Familias de repuestos que trabaja PartsMR.
//
// La linea de motor es transversal a las tres verticales y es el nucleo del
// negocio; el resto son piezas propias de cada tipo de vehiculo, tomadas del
// catalogo que ya se muestra en el sitio.
//
// Este archivo alimenta el contenido de las paginas de categoria y las
// palabras por las que esas paginas compiten en buscadores. Si se agrega o
// deja de trabajar una familia, se cambia aqui y no en cada pagina.

import type { TipoVehiculo } from './marcas'

export type Familia = {
  nombre: string
  detalle: string
}

// Comun a maquinaria, autos y camiones.
export const MOTOR: Familia[] = [
  {
    nombre: 'Motores completos',
    detalle: 'Motores nuevos y reacondicionados, listos para instalar.',
  },
  {
    nombre: 'Kits de reparación de motor',
    detalle: 'El conjunto completo para una reparación mayor, en un solo pedido.',
  },
  {
    nombre: 'Pistones',
    detalle: 'Pistones, anillos y pernos según medida estándar o sobremedida.',
  },
  {
    nombre: 'Empaquetaduras',
    detalle: 'Juegos de empaquetaduras de motor, culata y carter.',
  },
  {
    nombre: 'Culatas',
    detalle: 'Culatas completas o para armar, con y sin válvulas.',
  },
]

// Especificas de cada vertical.
export const POR_VERTICAL: Record<TipoVehiculo, Familia[]> = {
  maquinaria: [
    { nombre: 'Cadenas de oruga', detalle: 'Cadenas, zapatas y rodillos para excavadoras y bulldozers.' },
    { nombre: 'Bombas hidráulicas', detalle: 'Bombas, motores hidráulicos y mandos finales.' },
    { nombre: 'Radiadores', detalle: 'Radiadores y enfriadores para equipos en faena.' },
    { nombre: 'Filtros', detalle: 'Filtros de aire, aceite, combustible e hidráulicos.' },
  ],
  camion: [
    { nombre: 'Turbos', detalle: 'Turbocompresores nuevos y reacondicionados.' },
    { nombre: 'Compresores de aire', detalle: 'Compresores para sistema de frenos neumáticos.' },
    { nombre: 'Embragues', detalle: 'Kits de embrague, discos y prensas para carga pesada.' },
    { nombre: 'Radiadores', detalle: 'Radiadores y sistemas de enfriamiento para ruta.' },
    { nombre: 'Filtros de combustible', detalle: 'Filtros y trampas de agua para motores diésel.' },
  ],
  auto: [
    { nombre: 'Kits de embrague', detalle: 'Disco, prensa y collarín para autos y camionetas.' },
    { nombre: 'Pastillas de freno', detalle: 'Pastillas, discos y tambores.' },
    { nombre: 'Amortiguadores', detalle: 'Amortiguadores y componentes de suspensión.' },
    { nombre: 'Radiadores de aluminio', detalle: 'Radiadores, electroventiladores y termostatos.' },
    { nombre: 'Baterías AGM', detalle: 'Baterías para vehículos con sistema start-stop.' },
  ],
}

export function familiasDe(tipo: TipoVehiculo): Familia[] {
  return [...MOTOR, ...POR_VERTICAL[tipo]]
}
