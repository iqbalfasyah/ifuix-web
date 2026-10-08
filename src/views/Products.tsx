'use client'

import { useTranslation } from 'react-i18next'
import { ProductCards } from '../components/ProductCards'
import { ProductAI } from '../components/StudioPresentation'
import { FinanceConcept } from '../components/AIProductConcepts'
export const Products = () => {
  const { t } = useTranslation()
  return (
    <div className="studio-page">
      <div className="studio-container">
        <header className="page-intro">
          <span className="eyebrow">{t('studio.collection')}</span>
          <h1>{t('studio.productsTitle')}</h1>
          <p>{t('studio.productsIntro')}</p>
        </header>
        <ProductCards />
      </div>
      <FinanceConcept />
      <ProductAI />
    </div>
  )
}
