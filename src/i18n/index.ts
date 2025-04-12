import { initReactI18next } from 'react-i18next'

import * as Localization from 'expo-localization'
import i18n from 'i18next'

import translationDe from './locales/de.json'
import translationEn from './locales/en.json'
import translationEs from './locales/es.json'
import translationFr from './locales/fr.json'
import translationHi from './locales/hi.json'
import translationIt from './locales/it.json'
import translationJa from './locales/ja.json'
import translationKk from './locales/kk.json'
import translationPt from './locales/pt.json'
import translationRu from './locales/ru.json'
import translationUz from './locales/uz.json'
import translationZh from './locales/zh.json'

const resources = {
  ru: { translation: translationRu },
  en: { translation: translationEn },
  de: { translation: translationDe },
  es: { translation: translationEs },
  fr: { translation: translationFr },
  hi: { translation: translationHi },
  it: { translation: translationIt },
  ja: { translation: translationJa },
  kk: { translation: translationKk },
  pt: { translation: translationPt },
  uz: { translation: translationUz },
  zh: { translation: translationZh },
}

const initI18n = async () => {
  let appLanguage = 'en'
  const phoneLocale = Localization.getLocales()[0]?.languageCode || 'en'
  if (phoneLocale in resources) {
    appLanguage = phoneLocale
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    resources,
    lng: appLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
}

initI18n()

export default i18n
