import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import id from './locales/id.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
    // Indonesian is the first-visit default; a later manual choice is kept locally.
    fallbackLng: 'id',
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

const updateDocumentLanguage = () => {
  document.documentElement.lang = i18n.language?.startsWith('id') ? 'id' : 'en';
};
i18n.on('languageChanged', updateDocumentLanguage);
updateDocumentLanguage();
