import {
  GetSitemapPagesDocument,
  GetSitemapPagesQuery,
} from "@bashkim-com/prismic-dal";
import { PrismicDate } from "@bashkim-com/prismic-helpers";

import { prismicClient } from "../libraries/prismic/client";
import type { UrlType } from "../templates/sitemap";

export const PagesSitemap = async () => {
  const urlset: Array<UrlType> = [];
  const now = new Date().toISOString();
  const { APP_SITEMAP_BASE_HREF: baseHref } = process.env;

  const pagesResult = await prismicClient.query<GetSitemapPagesQuery>({
    query: GetSitemapPagesDocument,
  });

  const homePage = pagesResult.data.homePage.edges?.[0]?.node;
  if (homePage) {
    urlset.push({
      url: {
        loc: `${baseHref}/`,
        lastmod: PrismicDate(homePage._meta.lastPublicationDate).toISOString(),
        changefreq: homePage.sitemap_changefreq ?? undefined,
        priority: homePage.sitemap_priority ?? undefined,
      },
    });
  }

  const portfolioPage = pagesResult.data.portfolioPage.edges?.[0]?.node;
  if (portfolioPage) {
    urlset.push({
      url: {
        loc: `${baseHref}/portfolio/`,
        lastmod: PrismicDate(
          portfolioPage._meta.lastPublicationDate,
        ).toISOString(),
        changefreq: portfolioPage.sitemap_changefreq ?? undefined,
        priority: portfolioPage.sitemap_priority ?? undefined,
      },
    });
  }

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
