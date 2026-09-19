import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

// GitHub Pages has no SPA rewrites. Give public routes real HTML entry points
// so opening a shared product/download link does not return HTTP 404.
const pages = {
  '': [
    'IFUIX — Apps for focus and learning',
    'Discover Fuira for everyday productivity and KebunPintar for learning letters and numbers. Official downloads and installation guides.',
  ],
  products: [
    'Our apps | IFUIX',
    'Meet Fuira for Windows and KebunPintar for Android.',
  ],
  'products/kebunpintar': [
    'Kebun Pintar: Huruf & Angka | IFUIX',
    'Belajar huruf A–Z dan angka 0–20 dengan suara Indonesia. Android 8.0+, trial 24 jam, lalu aktivasi perangkat.',
  ],
  'download/kebunpintar': [
    'Download KebunPintar 3.2.1 for Android | IFUIX',
    'Unduh APK resmi KebunPintar 3.2.1 untuk Android 8.0+. Panduan instalasi, trial 24 jam, dan informasi aktivasi.',
  ],
  'products/fuira': [
    'Fuira — Your everyday workspace | IFUIX',
    'Notes, schedules, focus timer and reminders in one offline desktop app.',
  ],
  'download/fuira': [
    'Download Fuira for Windows | IFUIX',
    'Get Fuira for Windows, read release notes and follow the installation guide.',
  ],
  download: [
    'Official app downloads | IFUIX',
    'Download KebunPintar for Android and Fuira for Windows, with installation guides.',
  ],
  about: ['About | IFUIX', 'An independent software studio from Indonesia.'],
  services: [
    'Software development | IFUIX',
    'Custom web, desktop and mobile application development.',
  ],
  contact: [
    'Contact | IFUIX',
    'Questions, feedback and support for IFUIX apps.',
  ],
  support: [
    'Support our work | IFUIX',
    'Support independent software development at IFUIX.',
  ],
  faq: ['Frequently asked questions | IFUIX', 'Answers about IFUIX and Fuira.'],
  privacy: ['Privacy | IFUIX', 'Read the IFUIX privacy policy.'],
  terms: ['Terms | IFUIX', 'Read the IFUIX terms of use.'],
}
const template = await readFile('dist/index.html', 'utf8')
const escape = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
for (const [route, [title, description]] of Object.entries(pages)) {
  const url = `https://ifuix.com/${route}`
  const image = route.includes('kebunpintar')
    ? 'https://ifuix.com/images/kebunpintar/home.png'
    : 'https://ifuix.com/icon.png'
  const meta = `<meta name="description" content="${escape(description)}" data-rh="true" />\n<link rel="canonical" href="${url}" data-rh="true" />\n<meta property="og:title" content="${escape(title)}" data-rh="true" />\n<meta property="og:description" content="${escape(description)}" data-rh="true" />\n<meta property="og:url" content="${url}" data-rh="true" />\n<meta property="og:type" content="website" data-rh="true" />\n<meta property="og:image" content="${image}" data-rh="true" />`
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace('</head>', `${meta}\n</head>`)
  const directory = path.join('dist', route)
  await mkdir(directory, { recursive: true })
  await writeFile(path.join(directory, 'index.html'), html)
}
await writeFile('dist/404.html', template)
console.log(
  `Created ${Object.keys(pages).length} static route entry points for GitHub Pages.`,
)
