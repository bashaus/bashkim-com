import { UrlType } from "../templates/sitemap";

export const PagesSitemap = async (): Promise<Array<UrlType>> => {
  const urlset: Array<UrlType> = [];
  const now = new Date().toISOString();
  const baseHref = process.env.APP_SITEMAP_BASE_HREF;

  urlset.push({
    url: {
      loc: `${baseHref}/`,
      lastmod: now,
      changefreq: "monthly",
      priority: "1.0",
    },
  } as UrlType);

  urlset.push({
    url: {
      loc: `${baseHref}/about/`,
      lastmod: now,
      changefreq: "monthly",
      priority: "1.0",
    },
  } as UrlType);

  urlset.push({
    url: {
      loc: `${baseHref}/cookies/`,
      lastmod: now,
      changefreq: "monthly",
      priority: "1.0",
    },
  } as UrlType);

  return urlset;
};
