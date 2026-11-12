import { Locale } from "@/i18n/locale/locale";

declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
  }
}
