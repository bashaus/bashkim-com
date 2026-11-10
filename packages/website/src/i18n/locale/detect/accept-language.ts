import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

import { defaultLocale, locales } from "../locale";

export function getLocaleFromAcceptLanguage(request: NextRequest) {
  const headers = Object.fromEntries(request.headers.entries());
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}
