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
    title: 'IFUIX | AI Software & SaaS',
    description:
      'IFUIX builds software and designs AI-powered SaaS for creative and finance workflows. Explore Framix Editor and the coming-soon IFUIX Finance concept.',
  },
  '/products': {
    title: 'IFUIX Products: Framix Editor, Fuira & Kebun Pintar',
    description:
      'Explore IFUIX apps and AI development plans: Framix for video editing, Fuira for productivity, Kebun Pintar for learning, and the Finance concept.',
  },
  '/products/framix': {
    title: 'Framix Editor: AI Video Editing & Captions | IFUIX',
    description:
      'An editor with AI editing prompts and captions. Explore the development demo and the roadmap for auto clipping and generative content. Contact IFUIX on WhatsApp.',
    image: '/images/framix/editor.webp',
  },
  '/products/finance': {
    title: 'IFUIX Finance | AI Finance SaaS Concept, Coming Soon',
    description:
      'A SaaS concept for freelancers and small businesses: AI receipt drafts, transaction categories, and cash-flow summaries. Not available yet.',
  },
  '/products/fuira': {
    title: 'Fuira: Notes, Schedules & Focus Timer for Windows | IFUIX',
    description:
      'Fuira combines notes, schedules, reminders, and a focus timer on Windows. Optional Google Drive sync. AI Assistant support is planned.',
    image: '/images/fuira/Welcome.png',
  },
  '/products/kebunpintar': {
    title: 'Kebun Pintar: Letters & Numbers | Learning App | IFUIX',
    description:
      'Learn letters A-Z and numbers 0-20 with Indonesian audio for children aged 3-6. Explore Android screenshots and demos. AI Assistant support is planned.',
    image: '/images/kebunpintar/home.png',
  },
  '/kebunpintar': {
    title: 'Kebun Pintar: Letters & Numbers | IFUIX',
    description:
      'An Android learning app for letters and numbers, with Indonesian audio for children aged 3-6.',
    canonical: '/products/kebunpintar',
  },
  '/download': {
    title: 'Official Fuira & Kebun Pintar Downloads | IFUIX',
    description:
      'Download Fuira for Windows and the Kebun Pintar Android APK. Official versions and installation guides.',
  },
  '/download/fuira': {
    title: 'Download Fuira for Windows | IFUIX',
    description:
      'Official Fuira downloads, release information, and installation guide for the Windows notes, schedules, and focus-timer app.',
  },
  '/download/kebunpintar': {
    title: 'Download Kebun Pintar for Android | IFUIX',
    description:
      'Download the official Kebun Pintar 3.2.1 APK for Android 8.0+. Installation guide, 24-hour trial, and activation through WhatsApp.',
  },
  '/about': {
    title: 'About IFUIX | Independent AI Software from Indonesia',
    description:
      'Meet IFUIX, an independent software brand from Indonesia building toward AI-powered creative and business workflows.',
  },
  '/services': {
    title: 'Web, Desktop & Mobile App Development | IFUIX',
    description: 'Discuss web, desktop, and mobile app development with IFUIX.',
  },
  '/contact': {
    title: 'Contact IFUIX | WhatsApp & App Support',
    description:
      'Contact IFUIX about Framix, Fuira support, Kebun Pintar activation, or app development. WhatsApp +62 85211225262.',
  },
  '/support': {
    title: 'Support IFUIX Development',
    description: 'Support independent IFUIX app development.',
  },
  '/faq': {
    title: 'IFUIX & Fuira Frequently Asked Questions',
    description:
      'Answers about IFUIX apps, Fuira features, and Windows installation.',
  },
  '/privacy': {
    title: 'IFUIX Privacy Policy',
    description:
      'Privacy and data-use information for the IFUIX website and apps.',
  },
  '/terms': {
    title: 'IFUIX Terms of Use',
    description: 'Terms of use for the IFUIX website and apps.',
  },
  '/kebunpintar/privacy': {
    title: 'Kebun Pintar Privacy Policy | IFUIX',
    description:
      'Privacy policy for the public Kebun Pintar Android learning app.',
  },
  '/privacy/kebunpintar': {
    title: 'Kebun Pintar Privacy Policy | IFUIX',
    description:
      'Privacy policy for the public Kebun Pintar Android learning app.',
    canonical: '/kebunpintar/privacy',
  },
} satisfies Record<string, PageSEO>

export type SiteRoute = keyof typeof seoPages

export const canonicalUrl = (route: SiteRoute) => {
  const page: PageSEO = seoPages[route]
  const canonical = page.canonical ?? route
  return `${siteOrigin}${canonical === '/' ? '/' : `${canonical}/`}`
}
