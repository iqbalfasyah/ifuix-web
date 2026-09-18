import { useTranslation } from 'react-i18next'
import { ProductCards } from '../components/ProductCards'
import { SEO } from '../components/seo/SEO'
export const Products = () => {
  const { t } = useTranslation()
  return (
    <div className="studio-page">
      <SEO
        title={`${t('studio.productsTitle')} | IFUIX`}
        description={t('studio.productsIntro')}
        url="https://ifuix.com/products"
      />
      <div className="studio-container">
        <header className="page-intro">
          <span className="eyebrow">{t('studio.collection')}</span>
          <h1>{t('studio.productsTitle')}</h1>
          <p>{t('studio.productsIntro')}</p>
        </header>
        <ProductCards />
      </div>
    </div>
  )
}
