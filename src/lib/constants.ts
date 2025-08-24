// Configuración del sitio
export const SITE_CONFIG = {
  name: 'PartsMR',
  description: 'Repuestos para autos, camiones y maquinaria',
  url: 'https://partsmr.com',
  email: 'contacto@partsmr.com',
  phone: '+56 9 1234 5678',
  whatsapp: '+56912345678'
} as const;

// Rutas de navegación
export const ROUTES = {
  home: '/',
  about: '/sobre-nosotros',
  services: '/servicios',
  contact: '/contacto',
  products: {
    auto: '/repuestos/autos',
    truck: '/repuestos/camiones',
    machinery: '/repuestos/maquinaria'
  }
} as const;

// Categorías de productos
export const PRODUCT_CATEGORIES = {
  auto: {
    name: 'Autos',
    path: '/repuestos/autos',
    image: '/autos.webp'
  },
  truck: {
    name: 'Camiones',
    path: '/repuestos/camiones',
    image: '/camiones.webp'
  },
  machinery: {
    name: 'Maquinaria',
    path: '/repuestos/maquinaria',
    image: '/maquinaria.webp'
  }
} as const;

// Países soportados
export const COUNTRIES = [
  { code: 'CL', name: 'Chile', flag: '/flags/bandera-chile.png' },
  { code: 'PE', name: 'Perú', flag: '/flags/bandera-peru.png' },
  { code: 'BO', name: 'Bolivia', flag: '/flags/bandera-bolivia.png' },
  { code: 'AR', name: 'Argentina', flag: '/flags/bandera-argentina.png' },
  { code: 'PY', name: 'Paraguay', flag: '/flags/bandera-paraguay.png' }
] as const;

// Métodos de pago
export const PAYMENT_METHODS = [
  { name: 'Visa', icon: '/metodos/visa.webp' },
  { name: 'Mastercard', icon: '/metodos/mastercard.webp' },
  { name: 'PayPal', icon: '/metodos/paypal.webp' },
  { name: 'WebPay', icon: '/metodos/webpay.webp' },
  { name: 'Transferencia', icon: '/metodos/transferencia.webp' }
] as const;
