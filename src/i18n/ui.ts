import es, { type Dictionary } from './es';
import en from './en';

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

const dictionaries: Record<Lang, Dictionary> = { es, en };

// Devuelve los textos del idioma actual (Astro.currentLocale).
// Si el idioma no existe, usa el idioma por defecto.
export function useTranslations(lang: string | undefined): Dictionary {
  return dictionaries[lang as Lang] ?? dictionaries[defaultLang];
}
