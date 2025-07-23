'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export default function Breadcrumbs() {
  const pathname = usePathname()

  const segments = useMemo(() => {
    const cleanPath = pathname.split('?')[0] // remove query params
    const parts = cleanPath.split('/').filter(Boolean)
    return parts.map((segment, i) => {
      const href = '/' + parts.slice(0, i + 1).join('/')
      return {
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        href,
      }
    })
  }, [pathname])

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: segments.map((s, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: s.name,
      item: `https://partsmr.cl${s.href}`,
    })),
  }

  return (
    <div className="text-sm text-gray-400 mb-6 mt-2 px-4 md:px-0">
      <nav aria-label="breadcrumbs" className="flex flex-wrap items-center space-x-1">
        <Link href="/" className="hover:text-orange-500 font-medium">
          Inicio
        </Link>
        {segments.map((s, i) => (
          <span key={i} className="flex items-center space-x-1">
            <span className="mx-1 text-gray-500">/</span>
            {i === segments.length - 1 ? (
              <span className="text-gray-300">{s.name}</span>
            ) : (
              <Link
                href={s.href}
                className="hover:text-orange-500 transition-colors font-medium"
              >
                {s.name}
              </Link>
            )}
          </span>
        ))}
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  )
}
