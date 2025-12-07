import enCommon from '@/locales/en/common.json';
import frCommon from '@/locales/fr/common.json';

export type Language = 'en' | 'fr';

const translations: Record<Language, typeof enCommon> = {
  en: enCommon,
  fr: frCommon,
};

export function getTranslation(lang: Language) {
  return translations[lang] || translations.en;
}

export function isValidLanguage(lang: unknown): lang is Language {
  return lang === 'en' || lang === 'fr';
}

export const DEFAULT_LANGUAGE: Language = 'fr';
export const SUPPORTED_LANGUAGES: Language[] = ['en', 'fr'];
