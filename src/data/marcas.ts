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

// Logos disponibles en /public/brand, por tipo de vehiculo. Solo 26 de las 75
// marcas tienen logo propio; para el resto el selector dibuja la inicial, de
// modo que todas las filas conserven la misma altura y alineacion.
const LOGOS: Record<TipoVehiculo, Record<string, string>> = {
  auto: {
    Audi: 'audi-auto',
    BMW: 'bmw-auto',
    Chery: 'chery-auto',
    Chevrolet: 'chevrolet-auto',
    Ford: 'ford-auto',
    'Great Wall': 'great-auto',
    Haval: 'haval-auto',
    'Mercedes-Benz': 'mercedes-auto',
    Porsche: 'porsche-auto',
    Volkswagen: 'volks-auto',
  },
  camion: {
    Foton: 'foton-camion',
    Freightliner: 'frei-camion',
    Higer: 'higer-camion',
    JAC: 'jac-camion',
    'Mercedes-Benz': 'mercedes-camion',
    Scania: 'scania-camion',
    Volvo: 'volvo-camion',
  },
  maquinaria: {
    Bobcat: 'bobcat-maquina',
    Caterpillar: 'cat-maquina',
    'John Deere': 'deere-maquina',
    Doosan: 'doosan-maquina',
    JCB: 'jcb-maquina',
    Komatsu: 'komatsu-maquina',
    Sany: 'sany-maquina',
    Volvo: 'volvo-maquina',
    XCMG: 'xcmg-maquina',
  },
}

const CARPETA: Record<TipoVehiculo, string> = {
  auto: 'car',
  camion: 'truck',
  maquinaria: 'machinery',
}

// Logos vectoriales de Simple Icons (licencia CC0), en el color oficial de
// cada marca. Cubren marcas que no tenian logo propio. Al ser SVG se ven
// nitidos en cualquier tamaño y las veinte juntas pesan 90KB.
// No dependen del tipo de vehiculo: Hyundai o Volvo aparecen en mas de una
// vertical y comparten el mismo logo.
const VECTORES: Record<string, string> = {
  Toyota: 'toyota',
  Nissan: 'nissan',
  Hyundai: 'hyundai',
  Kia: 'kia',
  Mazda: 'mazda',
  Honda: 'honda',
  Suzuki: 'suzuki',
  Peugeot: 'peugeot',
  Renault: 'renault',
  Subaru: 'subaru',
  Jeep: 'jeep',
  Mitsubishi: 'mitsubishi',
  'Citroën': 'citroen',
  MG: 'mg',
  RAM: 'ram',
  DAF: 'daf',
  Iveco: 'iveco',
  Scania: 'scania',
  MAN: 'man',
  Hitachi: 'hitachi',
  // Estas ya tienen logo propio en alguna vertical, pero no en todas: Chevrolet
  // y Ford, por ejemplo, tenian version de auto y no de camion. El vectorial
  // cubre el hueco sin duplicar archivos por carpeta.
  Chevrolet: 'chevrolet',
  Ford: 'ford',
  Volvo: 'volvo',
  Caterpillar: 'caterpillar',
  JCB: 'jcb',
  'John Deere': 'johndeere',
  Audi: 'audi',
  BMW: 'bmw',
  Porsche: 'porsche',
  Volkswagen: 'volkswagen',
}

export function logoDeMarca(tipo: string | undefined, marca: string): string | null {
  // Primero el logo propio de la vertical, que ya estaba en el proyecto.
  if (tipo && tipo in LOGOS) {
    const archivo = LOGOS[tipo as TipoVehiculo][marca]
    if (archivo) return `/brand/${CARPETA[tipo as TipoVehiculo]}/${archivo}.webp`
  }
  // Si no lo hay, el vectorial.
  const vector = VECTORES[marca]
  return vector ? `/brand/vector/${vector}.svg` : null
}
