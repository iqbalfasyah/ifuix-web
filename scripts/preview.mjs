import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, extname, sep } from 'node:path'

const root = resolve('out')
const portArg = process.argv.indexOf('--port')
const port = portArg === -1 ? 4175 : Number(process.argv[portArg + 1])
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.vtt': 'text/vtt',
  '.apk': 'application/vnd.android.package-archive',
  '.woff2': 'font/woff2',
}

createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, 'http://localhost').pathname,
    )
    let file = resolve(root, `.${pathname}`)
    if (file !== root && !file.startsWith(`${root}${sep}`)) {
      res.writeHead(403).end()
      return
    }
    let info
    try {
      info = await stat(file)
    } catch {
      /* Missing paths use the exported 404. */
    }
    if (info?.isDirectory()) {
      file = resolve(file, 'index.html')
      info = await stat(file)
    }
    if (!info?.isFile()) {
      file = resolve(root, '404.html')
      info = await stat(file)
      res.statusCode = 404
    }
    const bytes = await readFile(file)
    const range = /^bytes=(\d+)-(\d*)$/.exec(req.headers.range ?? '')
    res.setHeader(
      'Content-Type',
      types[extname(file)] ?? 'application/octet-stream',
    )
    res.setHeader('Accept-Ranges', 'bytes')
    if (range && res.statusCode === 200) {
      const start = Number(range[1])
      const end = range[2]
        ? Math.min(Number(range[2]), bytes.length - 1)
        : bytes.length - 1
      if (start > end || start >= bytes.length) {
        res.writeHead(416, { 'Content-Range': `bytes */${bytes.length}` }).end()
        return
      }
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${bytes.length}`,
        'Content-Length': end - start + 1,
      })
      res.end(
        req.method === 'HEAD' ? undefined : bytes.subarray(start, end + 1),
      )
    } else {
      res.setHeader('Content-Length', bytes.length)
      res.end(req.method === 'HEAD' ? undefined : bytes)
    }
  } catch {
    res.writeHead(500).end('Preview could not serve this file.')
  }
}).listen(port, '127.0.0.1', () =>
  console.log(`Static preview: http://127.0.0.1:${port}`),
)
