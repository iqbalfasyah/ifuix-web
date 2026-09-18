import { useTranslation } from 'react-i18next'
import { ProductCards } from '../../components/ProductCards'
export const FeaturedProduct = () => {
  const { t } = useTranslation()
  return (
    <section id="our-products" className="studio-products">
      <div className="studio-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t('studio.collection')}</span>
            <h2>{t('studio.productsHeading')}</h2>
          </div>
          <p>{t('studio.productsIntro')}</p>
        </div>
        <ProductCards />
      </div>
    </section>
  )
}
