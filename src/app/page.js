'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Countries from '../components/Countries'
import ProductCategories from '../components/ProductCategories'
import AboutSection from '../components/AboutSection'
import ProductGrid from '../components/ProductGrid'
import ServicesSection from '../components/ServicesSection'
import PaymentOptions from '../components/PaymentOptions'
import ContactForm from '../components/ContactForm'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import WhatsappButton from '../components/WhatsappButton' // 👈 Importación añadida

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white text-[#171717] overflow-x-hidden">
      {/* Header fijo (incluye su propio espaciador) */}
      <Header />

      {/* Contenido principal sin padding-top adicional */}
      <main>
        <Hero />
        <Benefits />
        <div className="h-1 w-full bg-[#e2e8f0]" />
        <Countries />
        <div className="h-1 w-full bg-[#e2e8f0]" />
        <ProductCategories />
        <div className="h-1 w-full bg-[#e2e8f0]" />
        <AboutSection />
        <div className="h-1 w-full bg-[#e2e8f0]" />
        <ProductGrid />
        <div className="h-1 w-full bg-[#e2e8f0]" />
        <ServicesSection />
        <PaymentOptions />
        <ContactForm />
        <Newsletter />
      </main>

      <Footer />

      {/* Botón de WhatsApp flotante */}
      <WhatsappButton />
    </div>
  )
}
