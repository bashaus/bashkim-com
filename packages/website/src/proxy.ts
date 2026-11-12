import { NextRequest, NextResponse } from "next/server";

import { detectLocaleFromAcceptLanguage } from "./i18n/locale/source/accept-language/detect";
import { localeAcceptLanguageHeaderName } from "./i18n/locale/source/accept-language/get";
import { detectLocaleFromCookie } from "./i18n/locale/source/cookie/detect";
import { localeCookieHeaderName } from "./i18n/locale/source/cookie/get";
import { detectLocaleFromPath } from "./i18n/locale/source/path/detect";
import { localePathHeaderName } from "./i18n/locale/source/path/get";
import { detectLocaleFromVercel } from "./i18n/locale/source/vercel/detect";
import { localeVercelHeaderName } from "./i18n/locale/source/vercel/get";

export async function proxy(request: NextRequest) {
  const cookieLocale = await detectLocaleFromCookie();
  const pathLocale = detectLocaleFromPath(request);
  const acceptLocale = detectLocaleFromAcceptLanguage(request);
  const vercelLocale = detectLocaleFromVercel(request);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(localeCookieHeaderName, cookieLocale ?? "");
  requestHeaders.set(localePathHeaderName, pathLocale ?? "");
  requestHeaders.set(localeAcceptLanguageHeaderName, acceptLocale ?? "");
  requestHeaders.set(localeVercelHeaderName, vercelLocale ?? "");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - sitemap (sitemap routes and sitemap.xml)
     * - robots.txt (robots file)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|sitemap|robots\\.txt|favicon\\.ico).*)",
  ],
};
