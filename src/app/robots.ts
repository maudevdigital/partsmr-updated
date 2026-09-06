import type { MetadataRoute } from 'next'

// Next sirve esto como /robots.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Las API routes no aportan nada a la busqueda y no deben indexarse.
      disallow: '/api/',
    },
    sitemap: 'https://www.partsmr.com/sitemap.xml',
  }
}
