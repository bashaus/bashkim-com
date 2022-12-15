import {
  SitemapPagesDocument,
  SitemapPagesQuery,
} from "@bashkim-com/prismic-dal";
import { PrismicDate } from "@bashkim-com/prismic-helpers";

import { prismicClient } from "../libraries/prismic/client";
import type { UrlType } from "../templates/sitemap";

export const PagesSitemap = async () => {
  const urlset: Array<UrlType> = [];
  const now = new Date().toISOString();
  const baseHref = process.env.APP_SITEMAP_BASE_HREF;

  const pageQuery = prismicClient.query<SitemapPagesQuery>({
    query: SitemapPagesDocument,
  });

  const [pagesResult] = await Promise.all([pageQuery]);

  const { node: homePage } = pagesResult.data.homePage.edges[0];
  const { node: portfolioPage } = pagesResult.data.portfolioPage.edges[0];

  urlset.push({
    url: {
      loc: `${baseHref}/`,
      lastmod: PrismicDate(homePage._meta.lastPublicationDate).toISOString(),
      changefreq: homePage.sitemap_changefreq,
      priority: homePage.sitemap_priority,
    },
  });

  urlset.push({
    url: {
      loc: `${baseHref}/portfolio/`,
      lastmod: PrismicDate(
        portfolioPage._meta.lastPublicationDate
      ).toISOString(),
      changefreq: portfolioPage.sitemap_changefreq,
      priority: portfolioPage.sitemap_priority,
    },
  });

  urlset.push({
    url: {
      loc: `${baseHref}/about/`,
      lastmod: now,
      changefreq: "monthly",
      priority: "1.0",
    },
  });

  urlset.push({
    url: {
      loc: `${baseHref}/cookies/`,
      lastmod: now,
      changefreq: "monthly",
      priority: "0.1",
    },
  });

  return urlset;
};
