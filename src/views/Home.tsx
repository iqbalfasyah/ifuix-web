'use client'

import { ArrowUpRight, Heart, Workflow, Leaf } from 'lucide-react'
import { Link } from '../components/navigation'
import { useTranslation } from 'react-i18next'
import { Hero } from '../sections/home/Hero'
import { FeaturedProduct } from '../sections/home/FeaturedProduct'
import { ProductAI } from '../components/StudioPresentation'
import { FinanceConcept } from '../components/AIProductConcepts'
export const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <FinanceConcept />
      <ProductAI />
      <section className="studio-values">
        <div className="studio-container">
          <span className="eyebrow">{t('studio.philosophy')}</span>
          <div className="values-grid">
            {[Heart, Workflow, Leaf].map((Icon, i) => (
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
