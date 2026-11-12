import { headers } from "next/headers";

import { localeSchema } from "../../locale";

export const localeCookieHeaderName = "x-locale-cookie";

export async function getLocaleFromCookie(headerList?: Headers) {
  const _headerList = headerList ?? (await headers());
  const response = await localeSchema.safeParseAsync(
    _headerList.get(localeCookieHeaderName),
  );

  return response.data ?? null;
}
