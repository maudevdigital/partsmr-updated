import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'PartsMR - Repuestos para maquinaria pesada',
  description: 'Compra repuestos de calidad para maquinaria desde Bolivia, Perú, Chile y más.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-white text-[#171717] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
