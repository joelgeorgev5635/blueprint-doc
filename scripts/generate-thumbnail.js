const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')

const inputPath = path.join(__dirname, '../src/content/finals-to-foundation-core.html')
const logoPath = path.join(__dirname, '../public/logo.png')
const output = "C:\\Users\\User\\OneDrive - Queen's University Belfast\\All else\\Desktop\\Gumroad\\thumbnail.png"

async function generateThumbnail() {
  let html = fs.readFileSync(inputPath, 'utf8')
  const logoBase64 = fs.readFileSync(logoPath).toString('base64')
  html = html.replace(/src="[^"]*logo\.png"/g, `src="data:image/png;base64,${logoBase64}"`)

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // Set viewport to A4 cover dimensions at 2x for sharpness
  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 })
  await page.setContent(html, { waitUntil: 'domcontentloaded' })
  await page.evaluateHandle('document.fonts.ready')

  // Screenshot only the first .page div (cover)
  const cover = await page.$('.page')
  await cover.screenshot({ path: output, type: 'png' })

  await browser.close()
  console.log(`Thumbnail saved to: ${output}`)
}

generateThumbnail().catch(console.error)
