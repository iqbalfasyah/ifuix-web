'use client'

import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from './navigation'
import { whatsappUrl } from '../data/site'

export function FinanceConcept({ full = false }: { full?: boolean }) {
  const { t } = useTranslation()
  const Heading = full ? 'h1' : 'h2'
  const contact = `${whatsappUrl}?text=${encodeURIComponent(t('finance.contact'))}`
  return (
    <section className="studio-products" aria-labelledby="finance-concept">
      <div className="studio-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t('finance.badge')}</span>
            <Heading
              id="finance-concept"
              className="text-3xl md:text-5xl font-semibold mt-4"
            >
              {t('finance.name')}
            </Heading>
            <h3 className="text-xl font-semibold mt-4">{t('finance.title')}</h3>
          </div>
          <p>{t('finance.intro')}</p>
        </div>
        <p className="small-note">{t('finance.note')}</p>
        {full && (
          <>
            <h2 className="text-2xl font-semibold mt-12">
              {t('finance.featuresTitle')}
            </h2>
            <div className="values-grid">
              {[0, 1, 2].map((i) => (
                <div key={i}>
                  <h3>{t(`finance.f${i}Title`)}</h3>
                  <p>{t(`finance.f${i}Body`)}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 space-y-8">
              {['flow', 'scope', 'privacy'].map((key) => (
                <div key={key}>
                  <h2 className="text-xl font-semibold mb-3">
                    {t(`finance.${key}Title`)}
                  </h2>
                  <p className="text-sm leading-7 max-w-3xl">
                    {t(`finance.${key}Body`)}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="hero-actions mt-8">
          {!full && (
            <Link to="/products/finance" className="primary-action">
              {t('finance.detail')}
              <ArrowUpRight size={18} />
            </Link>
          )}
          <a
            href={contact}
            target="_blank"
            rel="noopener noreferrer"
            className={full ? 'primary-action' : 'text-action'}
          >
            {t('finance.contact')}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export function FramixRoadmap() {
  const { t } = useTranslation()
  return (
    <section className="studio-products" aria-labelledby="framix-roadmap">
      <div className="studio-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t('roadmap.badge')}</span>
            <h2 id="framix-roadmap">{t('roadmap.title')}</h2>
          </div>
          <p>{t('roadmap.intro')}</p>
        </div>
        <div className="values-grid">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i}>
              <h3>{t(`roadmap.f${i}Title`)}</h3>
              <p>{t(`roadmap.f${i}Body`)}</p>
            </div>
          ))}
        </div>
        <p className="small-note mt-8">{t('roadmap.note')}</p>
      </div>
    </section>
  )
}
