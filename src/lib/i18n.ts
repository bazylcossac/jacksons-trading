import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import enCommon from '../../public/locales/en/common.json';
import plCommon from '../../public/locales/pl/common.json';
import plTest from '../../public/locales/pl/test.json'

const resources = {
  en: {
    common: enCommon,
    test: plTest
  },
  pl: {
    common: plCommon,
    test: plTest
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    defaultNS: 'common',
    ns: ['common', 'test'],
    
    interpolation: {
      escapeValue: false, 
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
