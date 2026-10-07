'use client'

import { useTranslation } from 'react-i18next'
import { PageHeader } from '../components/PageHeader'
import { Link } from '../components/navigation'

export const KebunPrivacy = () => {
  const { t } = useTranslation()
  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-32 max-w-3xl mx-auto px-4 md:px-6">
      <PageHeader
        label="Kebun Pintar / Android 3.2.1"
        title={t('legal.kebun_title')}
        description={t('legal.kebun_desc')}
      />
      <p className="text-sm text-gray-500 mb-8">
        {t('legal.updated')} / id.kebunpintar.android
      </p>
      <div className="space-y-8 text-gray-600 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mb-4 [&_a]:text-primary [&_a]:underline">
        {['scope', 'local', 'activation', 'permissions', 'control'].map(
          (key) => (
            <section key={key}>
              <h2>{t(`legal.kebun_${key}_title`)}</h2>
              <p>{t(`legal.kebun_${key}_body`)}</p>
            </section>
          ),
        )}
        <section>
          <h2>{t('legal.questions_title')}</h2>
          <p>{t('legal.questions_body')}</p>
          <a href="mailto:hello@ifuix.com">hello@ifuix.com</a>
        </section>
        <p className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl">
          <Link to="/download/kebunpintar">{t('kebun.installGuide')}</Link>
        </p>
      </div>
    </div>
  )
}
