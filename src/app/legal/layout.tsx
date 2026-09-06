import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Las paginas legales no deben competir por posiciones ni diluir la
  // relevancia del resto del sitio, pero si tienen que ser accesibles para
  // quien las busque.
  robots: { index: true, follow: true },
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <article
          className="
            text-[#0f172a]
            [&_h1]:text-3xl [&_h1]:sm:text-4xl [&_h1]:font-bold [&_h1]:mb-3
            [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3
            [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-4
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:text-gray-700
            [&_li]:mb-2 [&_li]:leading-relaxed
            [&_a]:text-[#c2410c] [&_a]:underline
          "
        >
          {children}
        </article>
      </div>
    </main>
  )
}
