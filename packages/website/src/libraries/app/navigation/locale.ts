import { Locale } from "@/i18n/locale/locale";

export type LocaleParams = {
  locale: Locale;
};

export function getLocalePath({ locale }: LocaleParams) {
  return `/${locale}`;
}
