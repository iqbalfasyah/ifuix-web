'use client'

import { createInstance } from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import { useEffect, useState, type ReactNode } from 'react'
import id from '../i18n/locales/id.json'
import en from '../i18n/locales/en.json'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [instance] = useState(() => {
    const language = createInstance()
    language.use(initReactI18next).init({
      resources: { id: { translation: id }, en: { translation: en } },
      lng: 'id',
      fallbackLng: 'id',
      initAsync: false,
      interpolation: { escapeValue: false },
    })
    return language
  })

  useEffect(() => {
    const apply = (language: string) => {
      const locale = language.startsWith('en') ? 'en' : 'id'
      document.documentElement.lang = locale
      try {
        localStorage.setItem('i18nextLng', locale)
      } catch {
        /* Storage is optional. */
      }
    }
    let saved = 'id'
    try {
      saved = localStorage.getItem('i18nextLng') ?? 'id'
    } catch {
      /* Private browsing can deny storage. */
    }
    instance.on('languageChanged', apply)
    instance.changeLanguage(saved.startsWith('en') ? 'en' : 'id')
    return () => {
      instance.off('languageChanged', apply)
    }
  }, [instance])

  return <I18nextProvider i18n={instance}>{children}</I18nextProvider>
}
