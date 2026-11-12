import { headers } from "next/headers";

import { localeSchema } from "../../locale";

export const localePathHeaderName = "x-locale-path";

export class PathLocaleNotFoundError extends Error {}

export async function getLocaleFromPath(headerList?: Headers) {
  const _headerList = headerList ?? (await headers());
  const response = await localeSchema.safeParseAsync(
    _headerList.get(localePathHeaderName),
  );

  if (!response.success) {
    throw new PathLocaleNotFoundError();
  }

  return response.data;
}
