// Serves ./out the way GitHub Pages does, for the tests and Lighthouse:
// /path finds path.html, a folder with an index.html gets a trailing-slash
// redirect, anything else gets 404.html with a 404 status, and text is
// gzipped as Pages does.
// usage: node scripts/serve-out.mjs [port]
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, join, normalize, sep } from 'node:path'
import { gzipSync } from 'node:zlib'

const root = join(process.cwd(), 'out')
const port = Number(process.argv[2] ?? process.env.PORT ?? 4173)
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.vtt': 'text/vtt; charset=utf-8',
  '.xml': 'application/xml',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
}

async function isFile(path) {
  try {
    return (await stat(path)).isFile()
  } catch {
    return false
  }
}

createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', 'http://localhost')
  const path = normalize(decodeURIComponent(url.pathname))
  const file = join(root, path)
  if (file !== root && !file.startsWith(root + sep)) {
    res.writeHead(400).end()
    return
  }

  const send = async (target, status = 200) => {
    const type = types[extname(target)] ?? 'application/octet-stream'
    let body = await readFile(target)
    const headers = { 'content-type': type }
    const compressible = /^(text\/|application\/(json|xml)|image\/svg)/
    if (
      compressible.test(type) &&
      /\bgzip\b/.test(req.headers['accept-encoding'] ?? '')
    ) {
      body = gzipSync(body)
      headers['content-encoding'] = 'gzip'
      headers.vary = 'Accept-Encoding'
    }
    res.writeHead(status, headers)
    res.end(req.method === 'HEAD' ? undefined : body)
  }

  if (await isFile(file)) return send(file)
  if (!path.endsWith('/') && (await isFile(`${file}.html`))) {
    return send(`${file}.html`)
  }
  if (await isFile(join(file, 'index.html'))) {
    if (path.endsWith('/')) return send(join(file, 'index.html'))
    res.writeHead(301, { location: `${path}/${url.search}` }).end()
    return
  }
  return send(join(root, '404.html'), 404)
}).listen(port, () => console.log(`Serving out/ on http://localhost:${port}`))
