// Recomprime las imagenes de /public que superen el umbral.
//
// Uso:  node scripts/optimizar-imagenes.mjs
//
// Es idempotente: si una imagen ya esta optimizada, el resultado no queda mas
// liviano y no se sobrescribe. Correlo cada vez que agregues fotos nuevas al
// sitio; las de camara o stock suelen venir a 4000-8000px, muy por encima de
// lo que cualquier pantalla necesita.
import sharp from 'sharp'
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs'
import { join, extname } from 'path'

const ROOT = 'public'
const UMBRAL = 300 * 1024
const MAX_W = 1920
const CALIDAD = 80

function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    const st = statSync(p)
    if (st.isDirectory()) walk(p, out)
    else if (['.webp', '.png', '.jpg', '.jpeg'].includes(extname(p).toLowerCase())) {
      out.push({ path: p, size: st.size })
    }
  }
  return out
}

const grandes = walk(ROOT).filter(f => f.size > UMBRAL).sort((a, b) => b.size - a.size)
let antes = 0, despues = 0
console.log(`Procesando ${grandes.length} imagenes de mas de 300KB\n`)

for (const img of grandes) {
  // Leemos a buffer para no dejar el archivo abierto: en Windows el lazy-load
  // de sharp bloquea el descriptor y luego no se puede sobrescribir.
  const entrada = readFileSync(img.path)
  const meta = await sharp(entrada).metadata()
  const buf = await sharp(entrada)
    .resize({ width: Math.min(meta.width ?? MAX_W, MAX_W), withoutEnlargement: true })
    .webp({ quality: CALIDAD, effort: 6 })
    .toBuffer()

  if (buf.length < img.size) {
    writeFileSync(img.path, buf)
    antes += img.size; despues += buf.length
    const pct = ((1 - buf.length / img.size) * 100).toFixed(0)
    console.log(`${(img.size/1048576).toFixed(2)}MB -> ${(buf.length/1048576).toFixed(2)}MB  (-${pct}%)  ${img.path}  [${meta.width}x${meta.height}]`)
  } else {
    console.log(`sin cambio  ${img.path}`)
  }
}

console.log(`\nTOTAL: ${(antes/1048576).toFixed(2)}MB -> ${(despues/1048576).toFixed(2)}MB`)
console.log(`AHORRO: ${((antes-despues)/1048576).toFixed(2)}MB (-${((1-despues/antes)*100).toFixed(0)}%)`)
