const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

const port = Number(process.env.PORT) || 3000
const htmlPath = path.join(__dirname, 'MITRA_PAYMENT_Final_Siap_Hosting.html')

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.createReadStream(htmlPath).on('error', () => {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
      res.end('Halaman tidak dapat dimuat')
    }).pipe(res)
    return
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end('Not found')
})

server.listen(port, '0.0.0.0', () => {
  console.log(`Mitra Payment berjalan di port ${port}`)
})
