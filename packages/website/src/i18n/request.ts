import type { AbstractIntlMessages } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { getLocaleFromPath } from "@/i18n/locale/source/path/get";

import { defaultLocale, Locale } from "./locale/locale";

type MessageLoader = () => Promise<{ default: AbstractIntlMessages }>;

const messageBanks: Record<Locale, MessageLoader> = {
  [Locale.CA]: () => import("../../messages/ca.yaml"),
  [Locale.EN]: () => import("../../messages/en.yaml"),
  [Locale.ES]: () => import("../../messages/es.yaml"),
};

export default getRequestConfig(async () => {
  const locale = await getLocaleFromPath().catch(() => defaultLocale);
  const loadMessages = messageBanks[locale] ?? messageBanks[defaultLocale];
  const messages = (await loadMessages()).default;
  return { locale, messages };
});
