// Tipos básicos del sitio
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  whatsapp: string;
  phoneParaguay: string;
  whatsappParaguay: string;
}

// Tipos de navegación
export interface Route {
  path: string;
  name: string;
  icon?: string;
}

// Tipos de productos
export interface ProductCategory {
  id: string;
  name: string;
  path: string;
  image: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price?: number;
  description?: string;
  brand?: string;
  model?: string;
  year?: string;
}

// Tipos de contacto
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  product?: string;
}

export interface Country {
  code: string;
  name: string;
  flag: string;
}

// Tipos de pago
export interface PaymentMethod {
  name: string;
  icon: string;
  description?: string;
}

// Tipos de servicios
export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  features?: string[];
}

// Tipos de reviews/testimonios
export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  country: string;
}

// Tipos de FAQ
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
