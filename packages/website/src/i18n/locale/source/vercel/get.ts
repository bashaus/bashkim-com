import { headers } from "next/headers";

import { localeSchema } from "../../locale";

export const localeVercelHeaderName = "x-locale-vercel";

export async function getLocaleFromVercel(headerList?: Headers) {
  const _headerList = headerList ?? (await headers());
  const response = await localeSchema.safeParseAsync(
    _headerList.get(localeVercelHeaderName),
  );

  return response.data ?? null;
}
