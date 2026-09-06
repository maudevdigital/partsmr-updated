import Hero from '../components/Hero'
import BarraConfianza from '../components/BarraConfianza'
import Benefits from '../components/Benefits'
import Countries from '../components/Countries'
import ProductCategories from '../components/ProductCategories'
import AboutSection from '../components/AboutSection'
import ProductGrid from '../components/ProductGrid'
import ServicesSection from '../components/ServicesSection'
import PaymentOptions from '../components/PaymentOptions'
import ContactForm from '../components/ContactForm'
import FAQSection from '../components/FAQSection'
import Reviews from '../components/Reviews'

// Orden de la home: necesidad -> prueba -> accion.
//
// El visitante llega buscando una pieza concreta. Primero tiene que ver que la
// tenemos (categorias y catalogo), despues por que comprarnos a nosotros
// (beneficios y testimonios), y recien entonces se le pide la cotizacion.
// Antes el formulario estaba en sexto lugar, por delante del catalogo: se le
// pedia cotizar antes de mostrarle que existia lo que buscaba.
export default function Home() {
  return (
    <>
      {/* La franja de confianza se superpone al hero en vez de empujarlo: asi
          la fotografia se ve detras y el hero conserva toda su altura. */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-30">
          <BarraConfianza />
        </div>

        {/* 1. Captura: propuesta de valor y CTA principal */}
        <Hero />
      </div>

      {/* 2. Necesidad: las tres verticales del negocio */}
      <ProductCategories />

      {/* 3. Por que nosotros */}
      <Benefits />

      {/* 4. Prueba de que existe lo que busca */}
      <ProductGrid />

      {/* 5. Prueba social */}
      <Reviews />

      {/* 6. Conversion: el formulario llega con el cliente ya convencido */}
      <section id="contacto">
        <ContactForm />
      </section>

      {/* 7. Valor agregado */}
      <ServicesSection />

      {/* 8. Cobertura en detalle */}
      <Countries />

      {/* 9. Respaldo institucional */}
      <AboutSection />

      {/* 10. Facilidades de pago */}
      <PaymentOptions />

      {/* 11. Ultimas dudas antes de decidir */}
      <FAQSection />
    </>
  )
}
