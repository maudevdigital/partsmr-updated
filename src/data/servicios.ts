// src/data/servicios.ts
// Servicios tecnicos para maquinaria pesada.
//
// Son el activo mas diferenciador del negocio y el que la competencia directa
// no ofrece: no es venta de repuestos, es servicio en faena. Viven aqui para
// alimentar a la vez la pagina de servicios, la seccion de la home y el
// marcado de datos estructurados, sin que las tres versiones se desincronicen.
//
// Los `terminos` son las palabras con que un jefe de mantenimiento busca cada
// servicio. Se usan en el texto visible, no como lista oculta: el relleno de
// palabras clave invisible es penalizado y, sobre todo, no sirve.

export type Servicio = {
  slug: string
  titulo: string
  descripcion: string
  detalle: string
  terminos: string[]
}

export const SERVICIOS: Servicio[] = [
  {
    slug: 'reparacion-de-componentes',
    titulo: 'Reparación de componentes',
    descripcion:
      'Diagnóstico, mantenimiento y reconstrucción de componentes mecánicos e hidráulicos. Extendemos la vida útil de tu maquinaria con repuestos originales o equivalentes certificados.',
    detalle:
      'Recuperamos bombas hidráulicas, mandos finales, motores y cilindros en vez de reemplazarlos completos, que suele costar varias veces más. Entregamos informe de diagnóstico antes de intervenir, para que decidas con el costo a la vista.',
    terminos: ['reparación de componentes hidráulicos', 'reconstrucción de bombas', 'mandos finales'],
  },
  {
    slug: 'overhaul-de-equipos',
    titulo: 'Overhaul y semioverhaul de equipos',
    descripcion:
      'Procesos completos o parciales de reacondicionamiento. Recuperamos el rendimiento de equipos críticos como excavadoras, cargadores frontales, bulldozers y más.',
    detalle:
      'El overhaul completo devuelve el equipo a condición de operación como nuevo; el semioverhaul interviene solo los sistemas comprometidos, a un costo menor y con el equipo fuera de servicio menos tiempo. Evaluamos cuál corresponde según horas de uso y estado real.',
    terminos: ['overhaul de excavadoras', 'semioverhaul', 'reacondicionamiento de maquinaria'],
  },
  {
    slug: 'fortificacion-de-baldes',
    titulo: 'Fortificación de baldes',
    descripcion:
      'Aplicación de placas, refuerzos y soldadura de alta resistencia para extender la durabilidad de baldes en condiciones de alto desgaste, especialmente en minería y construcción pesada.',
    detalle:
      'En faena minera un balde sin refuerzo se consume en una fracción del tiempo. Aplicamos placas antidesgaste y refuerzos estructurales según el material que mueve el equipo, lo que multiplica su vida útil y evita el reemplazo prematuro.',
    terminos: ['fortificación de baldes', 'placas antidesgaste', 'refuerzo de baldes mineros'],
  },
  {
    slug: 'protocolos-mineros',
    titulo: 'Acreditación y protocolos mineros',
    descripcion:
      'Asesoría y ejecución de protocolos de mantenimiento y seguridad exigidos por faenas mineras. Garantizamos cumplimiento normativo y soporte documental.',
    detalle:
      'Las faenas exigen documentación y estándares que un proveedor sin acreditación no puede cumplir, y eso deja fuera al equipo o al servicio. Preparamos los protocolos y la documentación de respaldo para que la intervención sea aceptada por la faena.',
    terminos: ['acreditación minera', 'protocolos de mantenimiento', 'cumplimiento normativo faena'],
  },
]
