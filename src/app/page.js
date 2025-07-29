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
    <div className="font-sans bg-white text-[#171717] overflow-x-hidden">
      <main>
        <Hero />
        <Benefits />
        <div className="h-1 w-full bg-[#e2e8f0]" />
        <Countries />
        <div className="h-1 w-full bg-[#e2e8f0]" />
        <ProductCategories />
        <div className="h-1 w-full bg-[#e2e8f0]" />
        <ProductGrid />
        <div className="h-1 w-full bg-[#e2e8f0]" />
        <ContactForm />
        <div className="h-1 w-full bg-[#e2e8f0]" />
        <PaymentOptions />
        <div className="h-1 w-full bg-[#e2e8f0]" />
        <ServicesSection />
        <div className="h-1 w-full bg-[#e2e8f0]" />
        <Reviews />
        <div className="h-1 w-full bg-[#e2e8f0]" />
        <FAQSection />
        <div className="h-1 w-full bg-[#e2e8f0]" />
        <AboutSection />
      </main>

      <WhatsappButton />
    </div>
  )
}
