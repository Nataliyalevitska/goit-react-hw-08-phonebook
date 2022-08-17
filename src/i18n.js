import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../src/locales/en/translation.json';
import translationUk from '../src/locales/uk/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  uk: {
    translation: translationUk,
  },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: true,
  saveMissing: true,
});

export default i18n;
