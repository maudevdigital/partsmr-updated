// src/data/modelos.ts
// Modelos sugeridos por tipo de vehiculo y marca.
//
// La estructura es anidada por TIPO y no solo por marca porque varias marcas
// fabrican en mas de una vertical: Mercedes-Benz hace autos y camiones, Volvo
// hace camiones y maquinaria, Hyundai hace autos y excavadoras. Con una lista
// plana por marca, quien elegia "Auto" y "Mercedes-Benz" veia Actros y Atego,
// que son camiones.
//
// Se ofrecen como SUGERENCIAS: el campo sigue aceptando texto libre. Los
// modelos son miles, cambian cada año y varian por mercado, asi que una lista
// cerrada dejaria fuera cotizaciones legitimas. Aqui estan los de mayor
// circulacion en Chile y la region.

import type { TipoVehiculo } from './marcas'

export const MODELOS: Record<TipoVehiculo, Record<string, string[]>> = {
  auto: {
    Toyota: ['Hilux', 'Corolla', 'RAV4', 'Yaris', 'Land Cruiser', 'Fortuner', 'Prado', 'Rush', '4Runner', 'Tacoma', 'Avanza', 'Corolla Cross'],
    Nissan: ['Navara', 'Frontier', 'Versa', 'Qashqai', 'X-Trail', 'Kicks', 'NP300', 'Terrano', 'Sentra', 'March', 'Note', 'Pathfinder'],
    Hyundai: ['Tucson', 'Accent', 'Creta', 'Santa Fe', 'Elantra', 'H1', 'Porter', 'Grand i10', 'Kona', 'Venue', 'Staria'],
    Kia: ['Sportage', 'Rio', 'Seltos', 'Sorento', 'Cerato', 'Frontier', 'Morning', 'Picanto', 'Carnival', 'Stonic'],
    Chevrolet: ['Sail', 'Onix', 'Tracker', 'Captiva', 'Colorado', 'D-Max', 'Silverado', 'N300', 'Groove', 'Spark', 'Montana', 'Trailblazer'],
    Ford: ['Ranger', 'F-150', 'Escape', 'Explorer', 'Focus', 'EcoSport', 'Territory', 'Maverick', 'Bronco', 'Transit'],
    Volkswagen: ['Amarok', 'Gol', 'Polo', 'T-Cross', 'Tiguan', 'Saveiro', 'Virtus', 'Nivus', 'Taos', 'Golf'],
    'Mercedes-Benz': ['Clase A', 'Clase B', 'Clase C', 'Clase E', 'GLA', 'GLB', 'GLC', 'GLE', 'Vito', 'Sprinter', 'Citan'],
    BMW: ['Serie 1', 'Serie 2', 'Serie 3', 'Serie 5', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6'],
    Audi: ['A1', 'A3', 'A4', 'A5', 'A6', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8'],
    Porsche: ['Cayenne', 'Macan', '911', 'Panamera', 'Taycan', 'Boxster'],
    Mazda: ['CX-5', 'CX-30', 'CX-3', 'CX-9', 'Mazda 2', 'Mazda 3', 'Mazda 6', 'BT-50'],
    Suzuki: ['Swift', 'Vitara', 'Baleno', 'S-Presso', 'Jimny', 'Celerio', 'Ertiga', 'Grand Vitara'],
    Honda: ['CR-V', 'Civic', 'HR-V', 'Fit', 'Pilot', 'City', 'BR-V', 'Accord'],
    Mitsubishi: ['L200', 'Montero', 'Montero Sport', 'Outlander', 'ASX', 'Eclipse Cross', 'Xpander'],
    Peugeot: ['208', '2008', '3008', '301', 'Partner', 'Boxer', '5008', 'Landtrek', 'Expert'],
    Renault: ['Duster', 'Kwid', 'Sandero', 'Logan', 'Oroch', 'Master', 'Captur', 'Koleos', 'Stepway'],
    Citroën: ['C3', 'C4', 'C5 Aircross', 'Berlingo', 'Jumper', 'Jumpy', 'C-Elysée'],
    Subaru: ['Forester', 'XV', 'Outback', 'Impreza', 'Crosstrek', 'Legacy', 'WRX'],
    Chery: ['Tiggo 2', 'Tiggo 3', 'Tiggo 4', 'Tiggo 7', 'Tiggo 8', 'Arrizo 5', 'Arrizo 6', 'Tiggo 2 Pro'],
    Haval: ['H6', 'Jolion', 'H2', 'Dargo', 'H9', 'Big Dog'],
    'Great Wall': ['Poer', 'Wingle 5', 'Wingle 6', 'Wingle 7', 'Steed', 'Ora'],
    JAC: ['S2', 'S3', 'S4', 'S7', 'T6', 'T8', 'T9', 'E10X', 'Frison'],
    MG: ['ZS', 'HS', 'MG3', 'MG5', 'RX5', 'RX8', 'MG4', 'Extender'],
    Changan: ['CS15', 'CS35', 'CS55', 'CS75', 'Alsvin', 'Hunter', 'Eado', 'Star Truck'],
    Dongfeng: ['Rich 6', 'AX4', 'AX7', 'S30', 'H30', 'Glory 580', 'Mini EV'],
    Jeep: ['Renegade', 'Compass', 'Grand Cherokee', 'Wrangler', 'Cherokee', 'Gladiator'],
    RAM: ['700', '1000', '1200', '1500', '2500', '3500'],
    Dodge: ['Journey', 'Durango', 'Attitude', 'Challenger', 'Charger'],
    'Land Rover': ['Discovery', 'Discovery Sport', 'Defender', 'Range Rover', 'Evoque', 'Velar', 'Freelander'],
  },

  camion: {
    'Mercedes-Benz': ['Actros', 'Arocs', 'Atego', 'Axor', 'Accelo', 'Sprinter', 'Unimog', 'Econic'],
    Volvo: ['FH', 'FH16', 'FM', 'FMX', 'FE', 'FL', 'VM', 'VNL'],
    Scania: ['Serie R', 'Serie S', 'Serie G', 'Serie P', 'Serie K', 'Serie L'],
    Freightliner: ['Cascadia', 'M2 106', 'M2 112', 'Columbia', 'Argosy', 'Century', 'Business Class'],
    Foton: ['Aumark', 'Auman', 'Ollin', 'Tunland', 'View', 'Forland', 'Toano'],
    Higer: ['KLQ', 'H5C', 'H6C', 'Azure', 'Munro'],
    Hino: ['Serie 300', 'Serie 500', 'Serie 700', 'Dutro', 'Ranger', 'Profia'],
    Isuzu: ['NPR', 'NQR', 'NKR', 'NLR', 'FRR', 'FVR', 'FTR', 'ELF', 'GIGA', 'FORWARD'],
    Iveco: ['Daily', 'Eurocargo', 'Stralis', 'Trakker', 'S-Way', 'Tector', 'Hi-Way'],
    MAN: ['TGX', 'TGS', 'TGM', 'TGL', 'TGE'],
    Kenworth: ['T680', 'T800', 'W900', 'T370', 'T880', 'T480'],
    International: ['4300', '9800', 'ProStar', 'DuraStar', 'LT', 'HX', 'MV'],
    Mack: ['Anthem', 'Granite', 'Pinnacle', 'Titan', 'LR'],
    DAF: ['XF', 'CF', 'LF', 'XG', 'XD'],
    Shacman: ['X3000', 'F3000', 'H3000', 'M3000', 'X5000', 'L3000'],
    Sinotruk: ['Howo', 'Sitrak', 'Hohan', 'Golden Prince'],
    'UD Trucks': ['Quon', 'Quester', 'Croner', 'Kuzer'],
    Chevrolet: ['NPR', 'NKR', 'NQR', 'FRR', 'FTR', 'Kodiak'],
    Ford: ['Cargo', 'F-4000', 'F-350', 'F-750', 'Transit'],
    Dongfeng: ['Captain', 'KL', 'KR', 'KC', 'Duolika', 'Tianlong'],
    JAC: ['HFC', 'N Series', 'X Series', 'Sunray', 'K7', 'Gallop'],
  },

  maquinaria: {
    Caterpillar: ['320', '323', '330', '336', '349', '374', '420F', '426F', '950', '966', '972', 'D6', 'D8', 'D9', '140M', '424B'],
    Komatsu: ['PC130', 'PC200', 'PC210', 'PC220', 'PC300', 'PC350', 'PC400', 'D65', 'D85', 'WA320', 'WA380', 'WA470', 'HD785', 'HD465'],
    'John Deere': ['310', '410', '450', '650', '710', '750', '850', '210', '844', '2154'],
    JCB: ['3CX', '4CX', '5CX', 'JS130', 'JS200', 'JS220', '540-170', '535-95', '531-70', 'Loadall'],
    Bobcat: ['S550', 'S570', 'S650', 'S770', 'S850', 'E26', 'E35', 'E50', 'T590', 'T770'],
    Doosan: ['DX140', 'DX180', 'DX225', 'DX300', 'DX340', 'DX380', 'DL250', 'DL300'],
    Sany: ['SY75', 'SY135', 'SY215', 'SY265', 'SY365', 'SY500', 'STC750', 'SCC500'],
    XCMG: ['XE135', 'XE215', 'XE270', 'XE370', 'ZL30', 'ZL50', 'QY25', 'QY50', 'GR180'],
    Volvo: ['EC140', 'EC210', 'EC220', 'EC300', 'EC350', 'EC480', 'L60', 'L120', 'L150', 'A25', 'A40'],
    Hitachi: ['ZX130', 'ZX200', 'ZX240', 'ZX350', 'ZX470', 'ZX670', 'ZW180', 'ZW220'],
    Case: ['580', '590', '621', '721', '821', 'CX130', 'CX210', 'CX350', '1150'],
    'New Holland': ['B90B', 'B110B', 'B95B', 'E135', 'E215', 'W170', 'W190', 'D150'],
    Liebherr: ['R914', 'R924', 'R936', 'R946', 'R956', 'L538', 'L556', 'L566', 'PR736'],
    Hyundai: ['R140', 'R210', 'R220', 'R300', 'R380', 'HL740', 'HL760', 'HL980'],
    Kobelco: ['SK130', 'SK200', 'SK210', 'SK260', 'SK350', 'SK500'],
    Kubota: ['KX027', 'KX040', 'KX057', 'KX080', 'U35', 'U55', 'SVL65', 'SVL75'],
    Takeuchi: ['TB216', 'TB230', 'TB250', 'TB260', 'TB290', 'TL8', 'TL10', 'TL12'],
    LiuGong: ['856', '862', '870', '906', '915', '922', '936', 'CLG856'],
    Shantui: ['SD16', 'SD22', 'SD32', 'SD13', 'SL30', 'SL50'],
    Manitou: ['MT625', 'MT732', 'MT1035', 'MT1840', 'MLT 625', 'MLT 741', 'MRT 2150'],
    JLG: ['450AJ', '600S', '660SJ', '800AJ', '1930ES', '2630ES', '3246ES'],
    Genie: ['S40', 'S60', 'S65', 'Z34', 'Z45', 'Z60', 'GS1930', 'GS2646', 'GS3246'],
    'Wacker Neuson': ['ET16', 'ET65', 'ET90', 'EZ17', 'EZ26', 'EZ80', 'WL52'],
    Zoomlion: ['ZE60', 'ZE135', 'ZE215', 'ZE370', 'ZRT550', 'ZLJ50'],
  },
}

export function modelosPorMarca(tipo: string | undefined, marca?: string): string[] {
  if (!tipo || !marca) return []
  if (!(tipo in MODELOS)) return []
  return MODELOS[tipo as TipoVehiculo][marca] ?? []
}
