import { useTranslation } from 'react-i18next'
import { ProductCards } from '../components/ProductCards'
import { SEO } from '../components/seo/SEO'
export const Downloads = () => {
  const { t } = useTranslation()
  return (
    <div className="studio-page">
      <SEO
        title={`${t('studio.downloadsTitle')} | IFUIX`}
        description={t('studio.downloadsIntro')}
        url="https://ifuix.com/download"
      />
      <div className="studio-container">
        <header className="page-intro">
          <span className="eyebrow">{t('studio.officialDownloads')}</span>
          <h1>{t('studio.downloadsTitle')}</h1>
          <p>{t('studio.downloadsIntro')}</p>
        </header>
        <ProductCards />
        <p className="download-footnote">{t('studio.downloadsNote')}</p>
      </div>
    </div>
  )
}
