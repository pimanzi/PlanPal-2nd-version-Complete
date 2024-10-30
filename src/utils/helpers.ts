import i18n, { LocaleKey, locales } from './i18n/i18n';

export const formatDate = (locale: string, date: Date): string =>
  new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));

export const formatShortDate = (date: Date): string =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
  }).format(new Date(date));

export const formatShortDateActivity = (locale: string, date: Date): string =>
  new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
  }).format(new Date(date));

export function formatLocalizedDateShortActivity(date: Date) {
  const locale = locales[i18n.language as LocaleKey] || locales.en;
  return formatShortDateActivity(locale, date);
}

export function formatLocalizedDate(date: Date) {
  const locale = locales[i18n.language as LocaleKey] || locales.en;
  console.log(locale);

  return formatDate(locale, date);
}
