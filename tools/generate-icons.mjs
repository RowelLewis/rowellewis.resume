#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import toIco from 'to-ico'

const root = path.resolve(process.cwd(), 'public')
const svgPath = path.join(root, 'icon.svg')

const ensureDir = async (p) => fs.mkdir(p, { recursive: true })

const out = async (name) => path.join(root, name)

const readSvg = async () => fs.readFile(svgPath)

const savePng = async (buf, name) => fs.writeFile(await out(name), buf)

const main = async () => {
  await ensureDir(root)
  const svg = await readSvg()

  // Base renders
  const png512 = await sharp(svg).resize(512, 512, { fit: 'contain' }).png({ compressionLevel: 9 }).toBuffer()
  const png192 = await sharp(svg).resize(192, 192, { fit: 'contain' }).png({ compressionLevel: 9 }).toBuffer()
  await savePng(png512, 'icon-512.png')
  await savePng(png192, 'icon-192.png')

  // Apple touch icon (180x180) with 20px padding and background
  const icon140 = await sharp(svg).resize(140, 140, { fit: 'contain' }).png().toBuffer()
  const apple = await sharp({ create: { width: 180, height: 180, channels: 4, background: '#0b1111' } })
    .png()
    .composite([{ input: icon140, left: 20, top: 20 }])
    .toBuffer()
  await savePng(apple, 'apple-touch-icon.png')

  // Maskable icon (512x512) with ~409px safe zone circle
  const maskSize = 408
  const margin = Math.round((512 - maskSize) / 2)
  const maskIcon = await sharp(svg).resize(maskSize, maskSize, { fit: 'contain' }).png().toBuffer()
  const mask = await sharp({ create: { width: 512, height: 512, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .png()
    .composite([{ input: maskIcon, left: margin, top: margin }])
    .toBuffer()
  await savePng(mask, 'icon-mask.png')

  // ICO (16 & 32)
  const png32 = await sharp(svg).resize(32, 32, { fit: 'contain' }).png().toBuffer()
  const png16 = await sharp(svg).resize(16, 16, { fit: 'contain' }).png().toBuffer()
  const ico = await toIco([png16, png32])
  await fs.writeFile(await out('favicon.ico'), ico)

  // Also export a 32x32 PNG favicon if needed
  await savePng(png32, 'favicon-32.png')

  console.log('Icons generated in /public')
}

main().catch((e) => { console.error(e); process.exit(1) })
