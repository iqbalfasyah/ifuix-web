import type { Metadata } from 'next'
import {
  canonicalUrl,
  seoPages,
  siteOrigin,
  type PageSEO,
  type SiteRoute,
} from './site'

export function pageMetadata(route: SiteRoute): Metadata {
  const page: PageSEO = seoPages[route]
  const canonical = canonicalUrl(route)
  const image = `${siteOrigin}${page.image ?? '/icon.png'}`
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      siteName: 'IFUIX',
      locale: 'id_ID',
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [image],
    },
  }
}

export function pageGraph(route: SiteRoute) {
  const page: PageSEO = seoPages[route]
  const canonical = canonicalUrl(route)
  const organization = {
    '@type': 'Organization',
    '@id': `${siteOrigin}/#organization`,
    name: 'IFUIX',
    url: `${siteOrigin}/`,
    logo: `${siteOrigin}/icon.png`,
    email: 'hello@ifuix.com',
    founder: {
      '@type': 'Person',
      name: 'Iqbal Fasyah',
      sameAs: [
        'https://github.com/iqbalfasyah',
        'https://linkedin.com/in/iqbalfasyah',
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-85211225262',
      contactType: 'customer support',
      availableLanguage: ['Indonesian', 'English'],
    },
  }
  const graph: Record<string, unknown>[] = [
    organization,
    {
      '@type': 'WebSite',
      '@id': `${siteOrigin}/#website`,
      name: 'IFUIX',
      url: `${siteOrigin}/`,
      inLanguage: ['id', 'en'],
      publisher: { '@id': organization['@id'] },
    },
    {
      '@type': 'WebPage',
      '@id': `${canonical}#page`,
      name: page.title,
      description: page.description,
      url: canonical,
      isPartOf: { '@id': `${siteOrigin}/#website` },
    },
  ]
  if (route.startsWith('/products/')) {
    const isFramix = route.endsWith('framix')
    const isFuira = route.endsWith('fuira')
    const name = isFramix
      ? 'Framix Editor'
      : isFuira
        ? 'Fuira'
        : 'Kebun Pintar: Huruf & Angka'
    graph.push({
      '@type': 'SoftwareApplication',
      name,
      description: page.description,
      url: canonical,
      image: `${siteOrigin}${page.image}`,
      operatingSystem: isFuira || isFramix ? 'Windows' : 'Android',
      applicationCategory: isFramix
        ? 'MultimediaApplication'
        : isFuira
          ? 'ProductivityApplication'
          : 'EducationalApplication',
      publisher: { '@id': organization['@id'] },
    })
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'IFUIX',
          item: `${siteOrigin}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Aplikasi',
          item: `${siteOrigin}/products/`,
        },
        { '@type': 'ListItem', position: 3, name, item: canonical },
      ],
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}
