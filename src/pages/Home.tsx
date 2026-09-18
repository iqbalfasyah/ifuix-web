import { ArrowUpRight, Heart, WifiOff, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Hero } from '../sections/home/Hero'
import { FeaturedProduct } from '../sections/home/FeaturedProduct'
import { SEO } from '../components/seo/SEO'
export const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO
        title={t('studio.siteTitle')}
        description={t('studio.heroDescription')}
      />
      <Hero />
      <FeaturedProduct />
      <section className="studio-values">
        <div className="studio-container">
          <span className="eyebrow">{t('studio.philosophy')}</span>
          <div className="values-grid">
            {[Heart, WifiOff, Leaf].map((Icon, i) => (
              <div key={i}>
                <Icon size={25} strokeWidth={1.6} />
                <h3>{t(`studio.value${i + 1}Title`)}</h3>
                <p>{t(`studio.value${i + 1}Description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="studio-container studio-contact">
        <div>
          <span className="eyebrow">{t('studio.madeIn')}</span>
          <h2>{t('studio.feedbackTitle')}</h2>
          <p>{t('studio.feedbackDescription')}</p>
        </div>
        <Link to="/contact" className="primary-action">
          {t('studio.contact')}
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  )
}
