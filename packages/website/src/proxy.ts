import { NextRequest, NextResponse } from "next/server";

import { getLocaleFromAcceptLanguage } from "./i18n/locale/detect/accept-language";
import { getLocaleFromCookie } from "./i18n/locale/detect/cookie";
import { getLocaleFromPath } from "./i18n/locale/detect/path";
import { getLocaleFromVercel } from "./i18n/locale/detect/vercel";

export async function proxy(request: NextRequest) {
  const cookieLocale = await getLocaleFromCookie();
  const pathLocale = getLocaleFromPath(request);
  const acceptLocale = getLocaleFromAcceptLanguage(request);
  const vercelLocale = getLocaleFromVercel(request);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale-cookie", cookieLocale ?? "");
  requestHeaders.set("x-locale-path", pathLocale ?? "");
  requestHeaders.set("x-locale-accept", acceptLocale ?? "");
  requestHeaders.set("x-locale-vercel", vercelLocale ?? "");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
