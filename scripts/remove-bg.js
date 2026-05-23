const sharp = require('sharp')
const path = require('path')

const input = path.join(__dirname, '../public/logo.png')
const output = path.join(__dirname, '../public/logo.png')

async function removeWhiteBackground() {
  const image = sharp(input)
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info
  const pixels = new Uint8ClampedArray(data)

  for (let i = 0; i < pixels.length; i += channels) {
    const r = pixels[i]
    const g = pixels[i + 1]
    const b = pixels[i + 2]
    // Remove white and near-white pixels (threshold 230)
    if (r > 230 && g > 230 && b > 230) {
      pixels[i + 3] = 0 // set alpha to transparent
    }
  }

  await sharp(Buffer.from(pixels), {
    raw: { width, height, channels },
  })
    .png()
    .toFile(output)

  console.log('Done — white background removed from public/logo.png')
}

removeWhiteBackground().catch(console.error)
