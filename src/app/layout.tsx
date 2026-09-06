// app/layout.tsx
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsappButton from '../components/WhatsappButton'
import AnalyticsEvents from '../components/AnalyticsEvents'
import Script from 'next/script'
import DatosEstructurados from '../components/DatosEstructurados'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  // metadataBase permite usar rutas relativas en canonical y openGraph: sin
  // esto Next no puede resolverlas y las descarta silenciosamente.
  metadataBase: new URL('https://www.partsmr.com'),
  title: {
    // Las paginas internas definen su propio titulo y este le agrega la marca;
    // la home usa el absoluto de abajo.
    template: '%s | PartsMR',
    default:
      'PartsMR - Repuestos para maquinaria, autos, camiones | Envíos a toda LATAM',
  },
  description:
    'Encuentra repuestos de calidad para maquinaria pesada, autos, camionetas y camiones. Enviamos a Chile, Perú, Bolivia, Argentina, Paraguay y más. Atención profesional y asesoría técnica.',
  keywords: [
    'repuestos maquinaria pesada',
    'repuestos para autos',
    'repuestos para camiones',
    'repuestos Chile Perú Bolivia',
    'componentes industriales',
    'partes de maquinaria',
    'partes de vehículos',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PartsMR - Repuestos para Maquinaria, Autos y Camiones',
    description:
      'Compra repuestos confiables para maquinaria pesada, vehículos livianos y camiones. Entregas a toda Latinoamérica.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://partsmr.com',
    siteName: 'PartsMR',
    images: [
      {
        url: 'https://partsmr.com/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PartsMR - Repuestos de calidad',
      },
    ],
  },
}

// Pinta la barra superior del navegador en movil con el mismo azul del header,
// para que la interfaz del sistema se continue con el sitio en vez de cortarse
// con la franja gris por defecto. El segundo valor cubre a quien tenga el
// telefono en modo oscuro.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f172a' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MGW5KZZ7');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${montserrat.variable} font-sans antialiased bg-[#f9fafb] text-[#0f172a] [overflow-x:clip]`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MGW5KZZ7"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <AnalyticsEvents />
        <Header />
        <DatosEstructurados />
        <main>{children}</main>
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  )
}
