import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnalyticsEvents from '../components/AnalyticsEvents'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'PartsMR - Repuestos para maquinaria, autos, camiones | Envíos a toda LATAM',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${montserrat.variable} font-sans antialiased bg-[#f9fafb] text-[#0f172a] overflow-x-hidden`}
      >
        <AnalyticsEvents />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
