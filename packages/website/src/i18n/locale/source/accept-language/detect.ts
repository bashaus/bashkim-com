import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";
import { z } from "zod";

import { defaultLocale, locales } from "@/i18n/locale/locale";

const languagesSchema = z
  .array(z.string())
  .transform((langs) => langs.filter((lang) => lang !== "*"));

export function detectLocaleFromAcceptLanguage(request: NextRequest) {
  try {
    const acceptLanguage = request.headers.get("accept-language");
    if (!acceptLanguage) {
      return null;
    }

    const rawLanguages = new Negotiator({
      headers: {
        "accept-language": acceptLanguage,
      },
    }).languages();

    const languages = languagesSchema.parse(rawLanguages);
    return match(languages, locales, defaultLocale);
  } catch {
    return null;
  }
}
