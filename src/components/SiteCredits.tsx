export default function SiteCredits() {
  return (
    <div className="bg-[#0f172a] text-gray-400 text-sm text-center py-4 px-4">
      <p className="mb-1">© {new Date().getFullYear()} PartsMR. Todos los derechos reservados.</p>
      <p>
        Desarrollado por{' '}
        <a
          href="https://maudev.digital"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white underline underline-offset-2 transition"
        >
          MauDev
        </a>
      </p>
    </div>
  )
}
