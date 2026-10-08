'use client'

import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from './navigation'
import { framixContact } from '../data/site'

export function DeveloperProfile({ about = false }: { about?: boolean }) {
  const { t } = useTranslation()
  return (
    <section
      className="studio-container studio-contact"
      aria-labelledby="developer-profile"
    >
      <div>
        <span className="eyebrow">{t('presentation.profileBadge')}</span>
        <h2 id="developer-profile">{t('presentation.profileTitle')}</h2>
        <p>{t('presentation.profileBody')}</p>
      </div>
      {about ? (
        <a
          className="primary-action"
          href="https://linkedin.com/in/iqbalfasyah"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('presentation.linkedin')}
          <ArrowUpRight size={18} />
        </a>
      ) : (
        <Link className="primary-action" to="/about">
          {t('presentation.profileLink')}
          <ArrowUpRight size={18} />
        </Link>
      )}
    </section>
  )
}

export function ProductAI({ detail = false }: { detail?: boolean }) {
  const { t } = useTranslation()
  return (
    <section className="studio-products" aria-labelledby="product-ai">
      <div className="studio-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t('presentation.aiBadge')}</span>
            <h2 id="product-ai">{t('presentation.aiTitle')}</h2>
          </div>
          <p>{t('presentation.aiIntro')}</p>
        </div>
        <div className="values-grid">
          {(detail ? [0] : [0, 1, 2]).map((index) => (
            <div key={index}>
              <span className="eyebrow">
                {t(`presentation.ai${index}Status`)}
              </span>
              <h3>{t(`presentation.ai${index}Title`)}</h3>
              <p>{t(`presentation.ai${index}Body`)}</p>
            </div>
          ))}
        </div>
        <p className="small-note mt-8">{t('presentation.aiNote')}</p>
        <div className="mt-10 border-t border-gray-200 pt-8">
          <span className="eyebrow">{t('presentation.claudeStatus')}</span>
          <h3 className="text-xl font-semibold mt-3 mb-3">
            {t('presentation.claudeTitle')}
          </h3>
          <p className="text-sm leading-7 max-w-3xl">
            {t('presentation.claudeBody')}
          </p>
          <a
            className="text-action mt-4"
            href={framixContact}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('presentation.claudeContact')}
            <ArrowUpRight size={18} />
          </a>
        </div>
        {!detail && (
          <Link className="text-action mt-6" to="/products/framix">
            {t('presentation.aiDetail')}
            <ArrowUpRight size={18} />
          </Link>
        )}
      </div>
    </section>
  )
}

export function PlannedAssistant({
  product,
}: {
  product: 'fuira' | 'kebunpintar'
}) {
  const { t } = useTranslation()
  const index = product === 'fuira' ? 1 : 2
  return (
    <section className="studio-container studio-contact">
      <div>
        <span className="eyebrow">{t(`presentation.ai${index}Status`)}</span>
        <h2>{t(`presentation.ai${index}Title`)}</h2>
        <p>{t(`presentation.ai${index}Body`)}</p>
      </div>
    </section>
  )
}
