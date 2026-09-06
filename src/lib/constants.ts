// src/lib/constants.ts
// Fuente unica de los datos de la empresa.
//
// Este archivo existia pero no lo importaba nadie, y cada componente escribia
// los datos a mano. Asi llegamos a tener cuatro promesas de "soporte 24/7"
// conviviendo con un footer que decia lunes a viernes, y tres correos de
// contacto distintos. Cualquier dato que aparezca en mas de un lugar del sitio
// va aqui, y los componentes lo importan: es la unica forma de que no vuelvan
// a divergir.

export const EMPRESA = {
  nombre: 'PartsMR',
  descripcion:
    'Importación y venta de repuestos para maquinaria pesada, camiones, autos y camionetas, con despacho a Latinoamérica.',
  url: 'https://www.partsmr.com',
  rut: '77.878.571-4',
  email: 'ventas@partsmr.com',
  telefonos: [
    { pais: 'Chile', codigo: 'CL', display: '+56 9 2842 3774', e164: '+56928423774' },
    { pais: 'Paraguay', codigo: 'PY', display: '+595 992 110 955', e164: '+595992110955' },
  ],
  horario: {
    // El sitio prometia atencion 24/7 en cuatro lugares mientras el footer
    // decia horario de oficina. Este es el dato real.
    texto: 'Lunes a viernes, 09:00 a 18:00 (hora de Chile)',
    corto: 'Lun a Vie, 09:00–18:00',
  },
} as const

// Promesas comerciales. Aparecen en la barra de confianza, en el FAQ y en las
// paginas de categoria: deben decir lo mismo en los tres lugares.
export const PROMESAS = {
  plazoImportacion: '7 a 15 días',
  garantia: '6 meses',
  devolucion: '30 días',
  tiempoRespuesta: 'menos de 24 horas hábiles',
} as const

// Trayectoria en cifras.
export const CIFRAS = {
  anios: '+5',
  piezas: '+10.000',
  clientes: '+5.000',
} as const

export const PAISES = [
  { code: 'CL', name: 'Chile', flag: '/flags/bandera-chile.webp' },
  { code: 'PE', name: 'Perú', flag: '/flags/bandera-peru.webp' },
  { code: 'BO', name: 'Bolivia', flag: '/flags/bandera-bolivia.webp' },
  { code: 'AR', name: 'Argentina', flag: '/flags/bandera-argentina.webp' },
  { code: 'PY', name: 'Paraguay', flag: '/flags/bandera-paraguay.webp' },
  // Faltaba: el sitio ofrece seis paises, este archivo declaraba cinco.
  { code: 'US', name: 'Estados Unidos', flag: '/flags/bandera-usa.webp' },
] as const

// Las tres verticales del negocio. El orden refleja la prioridad comercial.
export const VERTICALES = [
  { slug: 'maquinaria', nombre: 'Maquinaria pesada', ruta: '/repuestos/maquinaria' },
  { slug: 'autos', nombre: 'Autos y camionetas', ruta: '/repuestos/autos' },
  { slug: 'camiones', nombre: 'Camiones', ruta: '/repuestos/camiones' },
] as const

export const RUTAS = {
  home: '/',
  repuestos: '/repuestos',
  servicios: '/servicios',
  sobreNosotros: '/sobre-nosotros',
  contacto: '/contacto',
} as const
