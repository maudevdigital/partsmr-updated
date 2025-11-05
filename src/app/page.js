'use client'

import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Countries from '../components/Countries'
import ProductCategories from '../components/ProductCategories'
import AboutSection from '../components/AboutSection'
import ProductGrid from '../components/ProductGrid'
import ServicesSection from '../components/ServicesSection'
import PaymentOptions from '../components/PaymentOptions'
import ContactForm from '../components/ContactForm'
import WhatsappButton from '../components/WhatsappButton'
import FAQSection from '../components/FAQSection'
import Reviews from '../components/Reviews'
import TechniciansShowcase from '../components/TechniciansShowcase'

export default function Home() {
  return (
    <>
      {/* 1. CAPTURA INICIAL - Hero con CTA claro */}
      <Hero />
      
      {/* 2. GENERACIÓN DE CONFIANZA - Beneficios clave */}
      <Benefits />
      
      {/* 3. CREDIBILIDAD - Video institucional + "Sobre Nosotros" */}
      {/* ⭐ MOVIDO: Video más arriba para generar confianza temprano */}
      <AboutSection />
      
      {/* 4. COBERTURA - Países que atienden */}
      <Countries />
      
      {/* 5. CONVERSIÓN PRINCIPAL - Formulario de cotización */}
      {/* ⭐ MOVIDO: Formulario más arriba, después de generar confianza */}
      <section id="contacto">
        <ContactForm />
      </section>
      
      {/* 6. REFUERZO - Categorías de productos */}
      <ProductCategories />
      
      {/* 7. PRUEBA SOCIAL - Testimonios refuerzan la decisión */}
      <Reviews />
      
      {/* 8. SERVICIOS - Valor agregado */}
      <ServicesSection />
      
      {/* 9. FACILIDADES - Métodos de pago */}
      <PaymentOptions />
      
      {/* 10. EXPLORACIÓN - Galería de productos */}
      <ProductGrid />
      
      {/* 11. RESOLUCIÓN DE DUDAS - FAQ al final */}
      <FAQSection />
      
      <WhatsappButton />
    </>
  )
}
