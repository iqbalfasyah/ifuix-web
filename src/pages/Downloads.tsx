import { useTranslation } from 'react-i18next'
import { ProductCards } from '../components/ProductCards'
export const Downloads = () => {
  const { t } = useTranslation()
  return (
    <div className="studio-page">
      <div className="studio-container">
        <header className="page-intro">
          <span className="eyebrow">{t('studio.officialDownloads')}</span>
          <h1>{t('studio.downloadsTitle')}</h1>
          <p>{t('studio.downloadsIntro')}</p>
        </header>
        <ProductCards downloadsOnly />
        <p className="download-footnote">{t('studio.downloadsNote')}</p>
      </div>
    </div>
  )
}
