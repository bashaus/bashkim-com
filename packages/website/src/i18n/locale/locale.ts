export enum Locale {
  CAT = "cat",
  EN = "en",
  ES = "es",
}

export function isLocale(value?: string | null): value is Locale {
  if (!value) {
    return false;
  }

  return locales.some((locale) => locale === value);
}

export const locales = Object.values(Locale);
export const defaultLocale = Locale.EN;
