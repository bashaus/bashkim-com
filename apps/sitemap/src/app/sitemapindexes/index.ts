import { SitemapType } from "../templates/sitemapindex";

export const SitemapIndex = async (): Promise<Array<SitemapType>> => {
  const sitemaps: Array<SitemapType> = [];
  const baseHref = process.env.APP_SITEMAP_BASE_HREF;

  sitemaps.push({
    sitemap: {
      loc: `${baseHref}/sitemap/case-studies.xml`,
    },
  } as SitemapType);

  sitemaps.push({
    sitemap: {
      loc: `${baseHref}/sitemap/pages.xml`,
    },
  } as SitemapType);

  return sitemaps;
};
