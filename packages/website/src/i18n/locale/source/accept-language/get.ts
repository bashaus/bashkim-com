import { headers } from "next/headers";

import { localeSchema } from "../../locale";

export const localeAcceptLanguageHeaderName = "x-locale-accept-language";

export async function getLocaleFromAcceptLanguage(headerList?: Headers) {
  const _headerList = headerList ?? (await headers());
  const response = await localeSchema.safeParseAsync(
    _headerList.get(localeAcceptLanguageHeaderName),
  );

  return response.data ?? null;
}
