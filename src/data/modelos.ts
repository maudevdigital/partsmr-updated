// src/data/modelos.ts
// Modelos sugeridos por marca, para autocompletar el campo "Modelo".
//
// Se ofrecen como SUGERENCIAS (datalist), no como lista cerrada: el campo sigue
// aceptando texto libre. Es deliberado — los modelos son miles, cambian cada
// año y varian por mercado, asi que una lista cerrada bloquearia cotizaciones
// legitimas. Aqui estan los de mayor circulacion en Chile y la region: cubren
// la mayoria de los casos y quien tenga algo distinto simplemente lo escribe.
//
// La clave es el nombre exacto de la marca en src/data/marcas.ts.

export const MODELOS: Record<string, string[]> = {
  // ---------- CAMIONES ----------
  'Mercedes-Benz': ['Actros', 'Arocs', 'Atego', 'Axor', 'Accelo', 'Sprinter', 'Clase A', 'Clase C', 'Clase E', 'GLC', 'GLE'],
  Volvo: ['FH', 'FM', 'FMX', 'FE', 'FL', 'VNL', 'EC210', 'EC220', 'EC350', 'L120', 'L150', 'A40'],
  Scania: ['Serie R', 'Serie S', 'Serie G', 'Serie P', 'Serie K'],
  Freightliner: ['Cascadia', 'M2 106', 'Columbia', 'Argosy', 'Century'],
  Foton: ['Aumark', 'Auman', 'Ollin', 'Tunland', 'View'],
  Higer: ['KLQ', 'H5C', 'H6C'],
  Hino: ['Serie 300', 'Serie 500', 'Serie 700', 'Dutro'],
  Isuzu: ['NPR', 'NQR', 'NKR', 'FRR', 'FVR', 'ELF', 'GIGA', 'D-Max'],
  Iveco: ['Daily', 'Eurocargo', 'Stralis', 'Trakker', 'S-Way'],
  MAN: ['TGX', 'TGS', 'TGM', 'TGL'],
  Kenworth: ['T680', 'T800', 'W900', 'T370'],
  International: ['4300', '9800', 'ProStar', 'DuraStar'],
  Mack: ['Anthem', 'Granite', 'Pinnacle'],
  DAF: ['XF', 'CF', 'LF'],
  Shacman: ['X3000', 'F3000', 'H3000'],
  Sinotruk: ['Howo', 'Sitrak'],
  'UD Trucks': ['Quon', 'Quester', 'Croner'],

  // ---------- MAQUINARIA ----------
  Caterpillar: ['320', '330', '336', '349', '420F', '426F', '950', '966', 'D6', 'D8', '140M'],
  Komatsu: ['PC200', 'PC220', 'PC300', 'PC350', 'D65', 'WA320', 'WA470', 'HD785'],
  'John Deere': ['310', '410', '650', '750', '850', '210'],
  JCB: ['3CX', '4CX', 'JS200', '540-170', '535-95'],
  Bobcat: ['S570', 'S650', 'S770', 'E35', 'E50', 'T590'],
  Doosan: ['DX140', 'DX225', 'DX300', 'DX340'],
  Sany: ['SY75', 'SY215', 'SY365', 'STC750'],
  XCMG: ['XE215', 'XE370', 'ZL50', 'QY25'],
  Hitachi: ['ZX200', 'ZX350', 'ZX470', 'ZW180'],
  Case: ['580', '621', 'CX210', 'CX350'],
  'New Holland': ['B90B', 'B110B', 'E215', 'W170'],
  Liebherr: ['R936', 'R946', 'L556', 'L566'],
  Kobelco: ['SK200', 'SK260', 'SK350'],
  Kubota: ['KX080', 'U55', 'KX057', 'SVL75'],
  Takeuchi: ['TB260', 'TB290', 'TL10'],
  LiuGong: ['856', '936', '922'],
  Shantui: ['SD16', 'SD22', 'SD32'],
  Manitou: ['MT1840', 'MLT 741', 'MT 625'],
  JLG: ['450AJ', '600S', '1930ES'],
  Genie: ['S60', 'Z45', 'GS1930'],
  'Wacker Neuson': ['ET90', 'EZ80', 'ET65'],
  Zoomlion: ['ZE215', 'ZE370', 'ZRT550'],

  // ---------- AUTOS Y CAMIONETAS ----------
  Toyota: ['Hilux', 'Corolla', 'RAV4', 'Yaris', 'Land Cruiser', 'Fortuner', 'Prado', 'Tacoma', 'Rush'],
  Nissan: ['Navara', 'Frontier', 'Versa', 'Qashqai', 'X-Trail', 'Kicks', 'Terrano', 'NP300'],
  Hyundai: ['Tucson', 'Accent', 'Creta', 'Santa Fe', 'Elantra', 'H1', 'Porter'],
  Kia: ['Sportage', 'Rio', 'Seltos', 'Sorento', 'Cerato', 'Frontier'],
  Chevrolet: ['Sail', 'Onix', 'Tracker', 'Captiva', 'Colorado', 'D-Max', 'Silverado', 'N300', 'NPR'],
  Ford: ['Ranger', 'F-150', 'Escape', 'Explorer', 'Focus', 'EcoSport', 'Cargo', 'F-4000'],
  Volkswagen: ['Amarok', 'Gol', 'Polo', 'T-Cross', 'Tiguan', 'Saveiro', 'Virtus'],
  Mazda: ['CX-5', 'CX-30', 'Mazda 3', 'BT-50', 'CX-9'],
  Suzuki: ['Swift', 'Vitara', 'Baleno', 'S-Presso', 'Jimny'],
  Honda: ['CR-V', 'Civic', 'HR-V', 'Fit', 'Pilot'],
  Mitsubishi: ['L200', 'Montero', 'Outlander', 'ASX'],
  Peugeot: ['208', '2008', '3008', '301', 'Partner', 'Boxer'],
  Renault: ['Duster', 'Kwid', 'Sandero', 'Logan', 'Oroch', 'Master'],
  Citroën: ['C3', 'C4', 'Berlingo', 'Jumper'],
  Subaru: ['Forester', 'XV', 'Outback', 'Impreza'],
  BMW: ['Serie 1', 'Serie 3', 'Serie 5', 'X1', 'X3', 'X5'],
  Audi: ['A3', 'A4', 'Q3', 'Q5', 'Q7'],
  Porsche: ['Cayenne', 'Macan', '911', 'Panamera'],
  Chery: ['Tiggo 2', 'Tiggo 4', 'Tiggo 7', 'Tiggo 8', 'Arrizo 5'],
  Haval: ['H6', 'Jolion', 'H2', 'Dargo'],
  'Great Wall': ['Poer', 'Wingle 5', 'Wingle 7', 'Haval H6'],
  JAC: ['S2', 'S3', 'T6', 'T8', 'Sunray', 'HFC'],
  MG: ['ZS', 'HS', 'MG3', 'MG5', 'RX8'],
  Changan: ['CS15', 'CS35', 'CS55', 'Alsvin', 'Hunter'],
  Dongfeng: ['Rich 6', 'AX4', 'S30', 'Captain', 'KL'],
  Jeep: ['Renegade', 'Compass', 'Grand Cherokee', 'Wrangler'],
  RAM: ['1500', '2500', '700', '1200'],
  Dodge: ['Journey', 'Durango', 'RAM 1500'],
  'Land Rover': ['Discovery', 'Defender', 'Range Rover', 'Evoque'],
}

export function modelosPorMarca(marca?: string): string[] {
  if (!marca) return []
  return MODELOS[marca] ?? []
}
