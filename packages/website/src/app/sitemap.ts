import {
  GetSitemapPagesDocument,
  GetSitemapPagesQuery,
} from "@bashkim-com/prismic-dal";
import { MetadataRoute } from "next";
import { Date as PrismicDate } from "prismic-reactjs";

import prismicClient from "@/libraries/prismic/client";

export async function generateSitemaps() {
  return [{ id: "pages" }];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urlset: MetadataRoute.Sitemap = [];
  const now = new Date().toISOString();

  const APP_BASE_HREF = "https://www.bashkim.com";

  const pagesResult = await prismicClient.query<GetSitemapPagesQuery>({
    query: GetSitemapPagesDocument,
  });

  const homePage = pagesResult.data.homePage.edges?.[0]?.node;
  if (homePage) {
    urlset.push({
      url: `${APP_BASE_HREF}/`,
      lastModified: PrismicDate(
        homePage._meta.lastPublicationDate,
      ).toISOString(),
      changeFrequency: (homePage.sitemap_changefreq ?? undefined) as "monthly",
      priority: homePage.sitemap_priority
        ? Number(homePage.sitemap_priority)
        : undefined,
    });
  }

  const portfolioPage = pagesResult.data.portfolioPage.edges?.[0]?.node;
  if (portfolioPage) {
    urlset.push({
      url: `${APP_BASE_HREF}/portfolio`,
      lastModified: PrismicDate(
        portfolioPage._meta.lastPublicationDate,
      ).toISOString(),
      changeFrequency: (portfolioPage.sitemap_changefreq ??
        "monthly") as "monthly",
      priority: portfolioPage.sitemap_priority
        ? Number(portfolioPage.sitemap_priority)
        : undefined,
    });
  }

  urlset.push({
    url: `${APP_BASE_HREF}/about`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1.0,
  });

  urlset.push({
    url: `${APP_BASE_HREF}/cookies`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.1,
  });

  return urlset;
}
