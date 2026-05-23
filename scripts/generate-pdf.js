const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')

const inputPath = path.join(__dirname, '../src/content/finals-to-foundation-core.html')
const logoPath = path.join(__dirname, '../public/logo.png')
const output = path.join(__dirname, '../public/finals-to-foundation-core.pdf')

async function generatePDF() {
  // Read HTML and embed logo as base64 so the path resolves correctly
  let html = fs.readFileSync(inputPath, 'utf8')
  const logoBase64 = fs.readFileSync(logoPath).toString('base64')
  html = html.replace(/src="[^"]*logo\.png"/g, `src="data:image/png;base64,${logoBase64}"`)

  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await page.setContent(html, { waitUntil: 'domcontentloaded' })

  // Wait for fonts to finish loading
  await page.evaluateHandle('document.fonts.ready')

  await page.pdf({
    path: output,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  })

  await browser.close()
  console.log(`PDF saved to: ${output}`)
}

generatePDF().catch(console.error)
