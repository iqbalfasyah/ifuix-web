import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import {
  render,
  seoPages,
  canonicalUrl,
  siteOrigin,
} from '../dist-ssr/entry-server.js'

// Render the same React tree used in the browser, including resolved lazy routes.
// Each GitHub Pages URL serves real content without JavaScript.
const template = await readFile('dist/index.html', 'utf8')
const assets = {
  script: template.match(/<script[^>]+src="([^"]+)"/)?.[1],
  styles: [
    ...template.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g),
  ].map((match) => match[1]),
}
if (!assets.script || !assets.styles.length)
  throw new Error('Missing Vite entry assets')
for (const route of Object.keys(seoPages)) {
  const html = await render(route, assets)
  if (
    !html.includes('<h1') ||
    (html.match(/rel="canonical"/g) ?? []).length !== 1
  )
    throw new Error(`Invalid static content or canonical on ${route}`)
  const directory = path.join('dist', route === '/' ? '' : route.slice(1))
  await mkdir(directory, { recursive: true })
  await writeFile(path.join(directory, 'index.html'), html)
}
const urls = Object.entries(seoPages)
  .filter(([, page]) => !page.canonical)
  .map(([route]) => `  <url><loc>${canonicalUrl(route)}</loc></url>`)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
await writeFile('dist/sitemap.xml', sitemap)
await writeFile('public/sitemap.xml', sitemap)
await writeFile(
  'dist/robots.txt',
  `User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap.xml\n`,
)
await writeFile(
  'dist/404.html',
  template
    .replace(
      /<title[^>]*>[\s\S]*?<\/title>/,
      '<title data-ifuix-seo="true">Halaman tidak ditemukan | IFUIX</title>',
    )
    .replace(
      '</head>',
      '<meta data-ifuix-seo="true" name="robots" content="noindex, follow" />\n</head>',
    )
    .replace(
      '<div id="root"></div>',
      '<div id="root"><main style="padding:80px 24px;text-align:center"><h1>Halaman tidak ditemukan</h1><p>Alamat halaman ini tidak tersedia.</p><a href="/">Kembali ke IFUIX</a></main></div>',
    ),
)
await writeFile('dist/.nojekyll', '')
console.log(
  `Rendered ${Object.keys(seoPages).length} complete HTML pages and ${urls.length} canonical sitemap URLs.`,
)
