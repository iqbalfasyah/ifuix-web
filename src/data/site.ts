export const siteOrigin = 'https://ifuix.com'
export const whatsappUrl = 'https://wa.me/6285211225262'
export const framixContact = `${whatsappUrl}?text=${encodeURIComponent('Halo IFUIX, saya tertarik dengan Framix Editor. Boleh minta informasi dan demo?')}`

export type PageSEO = {
  title: string
  description: string
  canonical?: string
  image?: string
}

export const seoPages = {
  '/': {
    title: 'IFUIX | Software & SaaS Berbasis AI',
    description:
      'IFUIX mengembangkan software dan merancang SaaS berbasis AI untuk konten kreatif dan keuangan. Kenali Framix Editor dan konsep IFUIX Finance yang coming soon.',
  },
  '/products': {
    title: 'Aplikasi IFUIX: Framix Editor, Fuira & Kebun Pintar',
    description:
      'Jelajahi aplikasi IFUIX: Framix Editor untuk video, Fuira untuk Windows, dan Kebun Pintar untuk Android. Lihat screenshot, demo, dan informasi resmi.',
  },
  '/products/framix': {
    title: 'Framix Editor: Editor Video & Caption AI | IFUIX',
    description:
      'Framix by IFUIX: editor video dengan AI untuk prompt editing dan caption. Kenali versi pengembangan, lihat demo, dan hubungi WhatsApp.',
    image: '/images/framix/editor.webp',
  },
  '/products/finance': {
    title: 'IFUIX Finance | Konsep SaaS Keuangan AI, Coming Soon',
    description:
      'Konsep SaaS IFUIX untuk freelancer dan usaha kecil: draft transaksi dari struk, kategorisasi, dan ringkasan arus kas dengan AI. Belum tersedia.',
  },
  '/products/fuira': {
    title: 'Fuira: Catatan, Jadwal & Timer Fokus Windows | IFUIX',
    description:
      'Fuira menyatukan catatan, jadwal, timer fokus, dan pengingat dalam aplikasi desktop Windows. Sinkronisasi Google Drive tersedia secara opsional.',
    image: '/images/fuira/Welcome.png',
  },
  '/products/kebunpintar': {
    title: 'Kebun Pintar: Huruf & Angka | Aplikasi Belajar Anak | IFUIX',
    description:
      'Belajar huruf A–Z dan angka 0–20 untuk anak usia 3–6 tahun dengan suara Indonesia. Lihat screenshot, video demo, dan panduan Android Kebun Pintar.',
    image: '/images/kebunpintar/home.png',
  },
  '/kebunpintar': {
    title: 'Kebun Pintar: Huruf & Angka | IFUIX',
    description:
      'Aplikasi belajar huruf A–Z dan angka 0–20 untuk anak usia 3–6 tahun.',
    canonical: '/products/kebunpintar',
  },
  '/download': {
    title: 'Unduhan Resmi Fuira & Kebun Pintar | IFUIX',
    description:
      'Unduh Fuira untuk Windows dan APK Kebun Pintar untuk Android dari IFUIX. Panduan pemasangan dan informasi versi resmi.',
  },
  '/download/fuira': {
    title: 'Download Fuira untuk Windows | IFUIX',
    description:
      'Unduhan resmi Fuira untuk Windows, informasi rilis, dan panduan instalasi aplikasi catatan, jadwal, dan timer fokus.',
  },
  '/download/kebunpintar': {
    title: 'Download Kebun Pintar untuk Android | IFUIX',
    description:
      'Unduh APK resmi Kebun Pintar 3.2.1 untuk Android 8.0+. Pelajari cara instalasi, trial 24 jam, dan aktivasi melalui WhatsApp.',
  },
  '/about': {
    title: 'Tentang IFUIX | Studio Aplikasi Indonesia',
    description:
      'Kenali Iqbal Fasyah, pengembang independen IFUIX di balik Framix Editor, Fuira, dan Kebun Pintar. Aplikasi untuk berkarya, bekerja, dan belajar.',
  },
  '/services': {
    title: 'Jasa Pengembangan Aplikasi Web, Desktop & Mobile | IFUIX',
    description:
      'Diskusikan pengembangan aplikasi web, desktop, dan mobile bersama IFUIX.',
  },
  '/contact': {
    title: 'Hubungi IFUIX | WhatsApp & Dukungan Aplikasi',
    description:
      'Hubungi IFUIX untuk informasi Framix Editor, bantuan Fuira, aktivasi Kebun Pintar, atau pengembangan aplikasi. WhatsApp +62 85211225262.',
  },
  '/support': {
    title: 'Dukung Pengembangan IFUIX',
    description: 'Dukung pengembangan aplikasi independen IFUIX.',
  },
  '/faq': {
    title: 'Pertanyaan Umum tentang IFUIX & Fuira',
    description:
      'Jawaban tentang aplikasi IFUIX, penggunaan Fuira, dan pemasangan di Windows.',
  },
  '/privacy': {
    title: 'Kebijakan Privasi IFUIX',
    description:
      'Informasi privasi dan penggunaan data pada website serta aplikasi IFUIX.',
  },
  '/terms': {
    title: 'Ketentuan Penggunaan IFUIX',
    description: 'Ketentuan penggunaan website dan aplikasi IFUIX.',
  },
  '/kebunpintar/privacy': {
    title: 'Kebijakan Privasi Kebun Pintar | IFUIX',
    description:
      'Kebijakan privasi resmi Kebun Pintar: Huruf & Angka, aplikasi edukasi untuk anak dan keluarga.',
  },
  '/privacy/kebunpintar': {
    title: 'Kebijakan Privasi Kebun Pintar | IFUIX',
    description: 'Kebijakan privasi resmi aplikasi Kebun Pintar.',
    canonical: '/kebunpintar/privacy',
  },
} satisfies Record<string, PageSEO>

export type SiteRoute = keyof typeof seoPages

export const canonicalUrl = (route: SiteRoute) => {
  const page: PageSEO = seoPages[route]
  const canonical = page.canonical ?? route
  return `${siteOrigin}${canonical === '/' ? '/' : `${canonical}/`}`
}
