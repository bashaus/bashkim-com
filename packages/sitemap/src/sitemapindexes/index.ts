import { config } from "@bashkim-com/config";

import { SitemapType } from "../templates/sitemapindex";

export const SitemapIndex = async (): Promise<Array<SitemapType>> => {
  const sitemaps: Array<SitemapType> = [];

  sitemaps.push({
    sitemap: {
      loc: `${config.sitemap.baseHref}/sitemap/case-studies.xml`,
    },
  } as SitemapType);

  sitemaps.push({
    sitemap: {
      loc: `${config.sitemap.baseHref}/sitemap/pages.xml`,
    },
  } as SitemapType);

  return sitemaps;
};
