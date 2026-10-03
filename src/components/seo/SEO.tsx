import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { canonicalUrl, seoPages, siteOrigin } from '../../data/site'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  url?: string
  image?: string
}

export const SEO = ({ title, description, keywords, url, image }: SEOProps) => {
  const { pathname } = useLocation()
  const { i18n } = useTranslation()
  const route = pathname.replace(/\/$/, '') || '/'
  const page = seoPages[route] ?? {
    title: 'Halaman tidak ditemukan | IFUIX',
    description:
      'Halaman ini tidak tersedia. Kembali ke beranda IFUIX untuk menemukan aplikasi dan informasi resmi.',
    image: '/icon.png',
  }
  const pageTitle = title ?? page.title
  const pageDescription = description ?? page.description
  const canonical = canonicalUrl(
    url ? new URL(url, siteOrigin).pathname : route,
  )
  const preview = image ?? `${siteOrigin}${page.image ?? '/icon.png'}`
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': `${siteOrigin}/#organization`,
      name: 'IFUIX',
      url: `${siteOrigin}/`,
      logo: `${siteOrigin}/icon.png`,
      sameAs: ['https://github.com/iqbalfasyah'],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+62-85211225262',
        contactType: 'customer support',
        availableLanguage: ['Indonesian', 'English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteOrigin}/#website`,
      name: 'IFUIX',
      url: `${siteOrigin}/`,
      publisher: { '@id': `${siteOrigin}/#organization` },
      inLanguage: ['id', 'en'],
    },
    {
      '@type': 'WebPage',
      '@id': `${canonical}#page`,
      name: pageTitle,
      description: pageDescription,
      url: canonical,
      isPartOf: { '@id': `${siteOrigin}/#website` },
    },
  ]
  if (route.startsWith('/products/')) {
    const name = route.endsWith('framix')
      ? 'Framix Editor'
      : route.endsWith('fuira')
        ? 'Fuira'
        : 'Kebun Pintar: Huruf & Angka'
    graph.push({
      '@type': 'SoftwareApplication',
      name,
      description: pageDescription,
      url: canonical,
      image: preview,
      applicationCategory: route.endsWith('framix')
        ? 'MultimediaApplication'
        : route.endsWith('fuira')
          ? 'ProductivityApplication'
          : 'EducationalApplication',
      operatingSystem: route.endsWith('kebunpintar') ? 'Android' : 'Windows',
      publisher: { '@id': `${siteOrigin}/#organization` },
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
  return (
    <Helmet>
      <html lang={i18n.language?.startsWith('en') ? 'en' : 'id'} />
      <title data-ifuix-seo="true">{pageTitle}</title>
      <meta
        data-ifuix-seo="true"
        name="description"
        content={pageDescription}
      />
      {keywords && (
        <meta data-ifuix-seo="true" name="keywords" content={keywords} />
      )}
      <meta
        data-ifuix-seo="true"
        name="robots"
        content={
          seoPages[route]
            ? 'index, follow, max-image-preview:large'
            : 'noindex, follow'
        }
      />
      <link data-ifuix-seo="true" rel="canonical" href={canonical} />
      <meta data-ifuix-seo="true" property="og:site_name" content="IFUIX" />
      <meta data-ifuix-seo="true" property="og:type" content="website" />
      <meta
        data-ifuix-seo="true"
        property="og:locale"
        content={i18n.language?.startsWith('en') ? 'en_US' : 'id_ID'}
      />
      <meta data-ifuix-seo="true" property="og:url" content={canonical} />
      <meta data-ifuix-seo="true" property="og:title" content={pageTitle} />
      <meta
        data-ifuix-seo="true"
        property="og:description"
        content={pageDescription}
      />
      <meta data-ifuix-seo="true" property="og:image" content={preview} />
      <meta
        data-ifuix-seo="true"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta data-ifuix-seo="true" name="twitter:title" content={pageTitle} />
      <meta
        data-ifuix-seo="true"
        name="twitter:description"
        content={pageDescription}
      />
      <meta data-ifuix-seo="true" name="twitter:image" content={preview} />
      <script data-ifuix-seo="true" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graph,
        }).replace(/</g, '\u003c')}
      </script>
    </Helmet>
  )
}
