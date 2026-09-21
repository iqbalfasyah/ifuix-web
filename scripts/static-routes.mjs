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
    'Belajar huruf A–Z dan angka 0–20 interaktif dengan suara Indonesia. Ramah anak usia dini, bebas iklan, dan aman untuk keluarga.',
  ],
  kebunpintar: [
    'Kebun Pintar: Huruf & Angka | IFUIX',
    'Belajar huruf A–Z dan angka 0–20 interaktif dengan suara Indonesia. Ramah anak usia dini, bebas iklan, dan aman untuk keluarga.',
  ],
  'kebunpintar/privacy': [
    'Kebijakan Privasi Kebun Pintar | IFUIX',
    'Kebijakan privasi resmi untuk aplikasi Kebun Pintar: Huruf & Angka. Dirancang untuk keluarga, 100% bebas iklan, tanpa pengumpulan data pribadi.',
  ],
  'privacy/kebunpintar': [
    'Kebijakan Privasi Kebun Pintar | IFUIX',
    'Kebijakan privasi resmi untuk aplikasi Kebun Pintar: Huruf & Angka. Dirancang untuk keluarga, 100% bebas iklan, tanpa pengumpulan data pribadi.',
  ],
  'download/kebunpintar': [
    'Download KebunPintar for Android | IFUIX',
    'Unduh KebunPintar untuk Android 8.0+. Panduan instalasi dan informasi rilis.',
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
