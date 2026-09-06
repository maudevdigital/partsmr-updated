// Icono de excavadora para la categoria "Maquinaria".
//
// Lucide no trae excavadora: lo mas cercano es Tractor (agricola) o Forklift
// (montacargas), y ninguno representa maquinaria pesada de construccion. Este
// sigue las convenciones de Lucide — viewBox 24x24, sin relleno, trazo de 2 y
// currentColor — para que combine con los iconos Car y Truck que ya se usan
// junto a el y herede el color por CSS.
type Props = {
  className?: string
}

export default function IconExcavadora({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* orugas */}
      <rect x="2" y="16" width="13" height="5" rx="2.5" />
      <path d="M5.5 18.5h6" />
      {/* cabina */}
      <path d="M4 16v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5" />
      {/* pluma y balancin */}
      <path d="M11 11l5-4 4 5" />
      {/* cuchara */}
      <path d="M17.5 13h5l-1.2 4h-2.6z" />
    </svg>
  )
}
