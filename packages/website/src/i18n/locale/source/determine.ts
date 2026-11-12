import { headers } from "next/headers";

import { defaultLocale } from "../locale";
import { getLocaleFromAcceptLanguage } from "./accept-language/get";
import { getLocaleFromCookie } from "./cookie/get";
import { getLocaleFromVercel } from "./vercel/get";

export async function determineLocale() {
  const headerList = await headers();
  const cookie = await getLocaleFromCookie(headerList);
  if (cookie) {
    return cookie;
  }

  const vercel = await getLocaleFromVercel(headerList);
  if (vercel) {
    return vercel;
  }

  const acceptLanguage = await getLocaleFromAcceptLanguage(headerList);
  if (acceptLanguage) {
    return acceptLanguage;
  }

  return defaultLocale;
}
