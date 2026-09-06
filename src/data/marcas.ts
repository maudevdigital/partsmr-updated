// src/data/marcas.ts
// Catalogo de marcas por tipo de vehiculo, para el selector del cotizador.
//
// Por que una lista propia y no una API: las APIs gratuitas de vehiculos
// (NHTSA vPIC) solo cubren el mercado de EE.UU. y no conocen marcas que aqui
// son habituales — Chery, Haval, Great Wall, JAC, XCMG, Sany. Una lista curada
// cubre exactamente lo que atendemos, responde al instante y no depende de
// terceros. Si algun dia se contrata una API de patente, esta lista sigue
// sirviendo como respaldo cuando la consulta falla o no encuentra el vehiculo.
//
// Las marcas marcadas con * tienen logo en /public/brand.

export type TipoVehiculo = 'auto' | 'camion' | 'maquinaria'

export const MARCAS: Record<TipoVehiculo, string[]> = {
  auto: [
    // Con logo en el sitio
    'Audi', 'BMW', 'Chery', 'Chevrolet', 'Ford', 'Great Wall',
    'Haval', 'Mercedes-Benz', 'Porsche', 'Volkswagen',
    // Alta presencia en el parque chileno
    'Changan', 'Citroën', 'Dodge', 'Dongfeng', 'Honda', 'Hyundai',
    'JAC', 'Jeep', 'Kia', 'Land Rover', 'Mazda', 'MG', 'Mitsubishi',
    'Nissan', 'Peugeot', 'RAM', 'Renault', 'Subaru', 'Suzuki', 'Toyota',
  ],
  camion: [
    // Con logo en el sitio
    'Foton', 'Freightliner', 'Higer', 'JAC', 'Mercedes-Benz', 'Scania', 'Volvo',
    // Habituales en transporte de carga
    'Chevrolet', 'DAF', 'Dongfeng', 'Ford', 'Hino', 'International',
    'Isuzu', 'Iveco', 'Kenworth', 'Mack', 'MAN', 'Shacman',
    'Sinotruk', 'UD Trucks',
  ],
  maquinaria: [
    // Con logo en el sitio
    'Bobcat', 'Caterpillar', 'Doosan', 'JCB', 'John Deere',
    'Komatsu', 'Sany', 'Volvo', 'XCMG',
    // Habituales en construccion y mineria
    'Case', 'Genie', 'Hitachi', 'Hyundai', 'JLG', 'Kobelco', 'Kubota',
    'Liebherr', 'LiuGong', 'Manitou', 'New Holland', 'Shantui',
    'Takeuchi', 'Wacker Neuson', 'Zoomlion',
  ],
}

// Valor especial: habilita el campo de texto libre para no perder la cotizacion
// de alguien cuya marca no esta en la lista.
export const OTRA_MARCA = 'Otra'

export function marcasPorTipo(tipo?: string): string[] {
  if (!tipo || !(tipo in MARCAS)) return []
  return [...MARCAS[tipo as TipoVehiculo]].sort((a, b) => a.localeCompare(b, 'es'))
}
