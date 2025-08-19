#!/usr/bin/env node
import puppeteer from 'puppeteer'
import httpServer from 'http-server'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PORT = 5000

const distPath = path.join(__dirname, 'dist', 'index.html')

if (!fs.existsSync(distPath)) {
  throw new Error(`❌ File ${distPath} not found. Run 'npm run build' first.`)
}

const startServer = async () => {
  const server = httpServer.createServer({ root: path.resolve(__dirname, 'dist') })
  server.listen(PORT, () => {
    console.log(`🚀 Local server started at http://localhost:${PORT}\n`)
  })
  return server
}

const generatePdf = async (server) => {
  let browser
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    const page = await browser.newPage()
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' })

    const pdfPath = path.join(__dirname, 'dist', 'resume.pdf')
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
    })

    const stats = fs.statSync(pdfPath)
    const fileSizeInKB = Math.round(stats.size / 1024)
    console.log(`✅ PDF generated: ${path.basename(pdfPath)} (${fileSizeInKB} KB)`)
  } catch (error) {
    console.error('❌ Error during PDF generation:', error)
    process.exit(1)
  } finally {
    if (browser) await browser.close()
    if (server) server.close()
  }
}

;(async () => {
  const server = await startServer()
  await generatePdf(server)
})()
