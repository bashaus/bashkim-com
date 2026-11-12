import { NextRequest } from "next/server";
import { match } from "path-to-regexp";

import { isLocale } from "../../locale";

const matcher = match<{ locale: string }>("/:locale{/*rest}");

export function detectLocaleFromPath(request: NextRequest) {
  const matched = matcher(request.nextUrl.pathname);
  if (!matched) {
    return null;
  }

  const { locale } = matched.params;
  if (!isLocale(locale)) {
    return null;
  }

  return locale;
}
