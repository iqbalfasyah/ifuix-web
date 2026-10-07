import assert from 'node:assert/strict'
import { readFile, readdir, stat } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { resolve } from 'node:path'

const routes = [
  '/',
  '/about',
  '/contact',
  '/download',
  '/download/fuira',
  '/download/kebunpintar',
  '/faq',
  '/kebunpintar',
  '/kebunpintar/privacy',
  '/privacy',
  '/privacy/kebunpintar',
  '/products',
  '/products/framix',
  '/products/fuira',
  '/products/kebunpintar',
  '/services',
  '/support',
  '/terms',
]
const aliases = {
  '/kebunpintar': '/products/kebunpintar',
  '/privacy/kebunpintar': '/kebunpintar/privacy',
}
const root = resolve('out')
// Windows accepts mismatched filename case; the Ubuntu Pages runner does not.
const exactPaths = new Set(
  (await readdir(root, { recursive: true })).map((file) =>
    file.replaceAll('\\', '/'),
  ),
)
const decode = (text) => text.replaceAll('&amp;', '&')
const checkedAssets = new Set()

for (const route of routes) {
  const html = await readFile(resolve(root, `.${route}/index.html`), 'utf8')
  assert.equal(
    (html.match(/<h1[\s>]/g) ?? []).length,
    1,
    `${route}: one heading`,
  )
  assert.equal((html.match(/<title>/g) ?? []).length, 1, `${route}: one title`)
  assert.equal(
    (html.match(/name="description"/g) ?? []).length,
    1,
    `${route}: one description`,
  )
  const canonical = aliases[route] ?? route
  assert.ok(
    html.includes(
      `href="https://ifuix.com${canonical === '/' ? '/' : `${canonical}/`}"`,
    ),
    `${route}: canonical URL`,
  )
  assert.equal(
    (html.match(/rel="canonical"/g) ?? []).length,
    1,
    `${route}: one canonical`,
  )
  const json = html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  )
  assert.ok(json, `${route}: structured data`)
  assert.equal(JSON.parse(json[1])['@context'], 'https://schema.org')
  assert.ok(
    !/style="[^"]*opacity:0/.test(html),
    `${route}: content visible without JS`,
  )
  for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)(?:[^"\s]*)"/g)) {
    const asset = decode(match[1])
    if (checkedAssets.has(asset)) continue
    checkedAssets.add(asset)
    const relative = asset.replace(/^\/|\/$/g, '')
    assert.ok(
      relative === '' || exactPaths.has(relative),
      `${route}: ${asset} filename case matches exported path`,
    )
    const file = resolve(root, `.${asset}`)
    assert.ok(
      (await stat(file)).isFile() || (await stat(file)).isDirectory(),
      `${route}: ${asset} exists`,
    )
  }
}

const sitemap = await readFile(resolve(root, 'sitemap.xml'), 'utf8')
assert.equal((sitemap.match(/<loc>/g) ?? []).length, 16)
assert.ok(
  (await readFile(resolve(root, '404.html'), 'utf8')).includes('noindex'),
)
assert.equal(
  (await readFile(resolve(root, 'CNAME'), 'utf8')).trim(),
  'ifuix.com',
)
await stat(resolve(root, '.nojekyll'))
const apk = await readFile(
  resolve(root, 'downloads/Kebun-Pintar-3.2.1-Android.apk'),
)
assert.equal(
  createHash('sha256').update(apk).digest('hex'),
  'dba0ac7294012d10450ec4cc9627153da9becc11499c8f381a510cdba85f35a6',
)
console.log(
  `PASS: ${routes.length} routes; static content, metadata, structured data, ${checkedAssets.size} internal targets; 16 sitemap URLs, noindex 404, Pages files, unchanged APK.`,
)
