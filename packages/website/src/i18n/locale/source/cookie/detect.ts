import { cookies } from "next/headers";

import { isLocale } from "../../locale";

export async function detectLocaleFromCookie() {
  const cookieJar = await cookies();
  const cookie = cookieJar.get("locale-selected")?.value;

  if (!isLocale(cookie)) {
    cookieJar.delete("locale-selected");
    return null;
  }

  return cookie;
}
