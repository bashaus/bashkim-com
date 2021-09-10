import { config } from "@bashkim-com/config";
import { UrlType } from "../templates/sitemap";

export const PagesSitemap = async (): Promise<Array<UrlType>> => {
  const urlset: Array<UrlType> = [];
  const now = new Date().toISOString();

  urlset.push({
    url: {
      loc: `${config.sitemap.baseHref}/`,
      lastmod: now,
      changefreq: "monthly",
      priority: "1.0",
    },
  } as UrlType);

  urlset.push({
    url: {
      loc: `${config.sitemap.baseHref}/about/`,
      lastmod: now,
      changefreq: "monthly",
      priority: "1.0",
    },
  } as UrlType);

  urlset.push({
    url: {
      loc: `${config.sitemap.baseHref}/legal/cookie-policy/`,
      lastmod: now,
      changefreq: "monthly",
      priority: "1.0",
    },
  } as UrlType);

  return urlset;
};
