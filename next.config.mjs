/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF primero: pesa ~30-50% menos que WebP con calidad equivalente.
    // Next sirve el formato que el navegador acepte y cae a WebP si no hay soporte.
    formats: ['image/avif', 'image/webp'],

    // Anchos que realmente usa el sitio. Recortar la lista por defecto evita
    // generar (y cachear) variantes que ningun breakpoint pide.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache de las imagenes optimizadas: 31 dias. Son assets estaticos que
    // solo cambian con un deploy nuevo.
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },

  // Quita el header "X-Powered-By: Next.js": no aporta nada y revela stack.
  poweredByHeader: false,

  // Comprime las respuestas HTML/JSON en el servidor.
  compress: true,
}

export default nextConfig
