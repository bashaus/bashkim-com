import {
  GetSitemapPagesDocument,
  GetSitemapPagesQuery,
} from "@bashkim-com/prismic-dal";
import { MetadataRoute } from "next";

import pathAsUrl from "@/libraries/app/path-as-url";
import { apolloClient } from "@/libraries/prismic/client";

export async function generateSitemaps() {
  return [{ id: "pages" }];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urlset: MetadataRoute.Sitemap = [];
  const now = new Date().toISOString();

  const pagesResult = await apolloClient.query<GetSitemapPagesQuery>({
    query: GetSitemapPagesDocument,
  });

  const homePage = pagesResult.data.homePage.edges?.[0]?.node;
  if (homePage) {
    urlset.push({
      url: pathAsUrl("/"),
      lastModified: homePage._meta.lastPublicationDate,
      changeFrequency: (homePage.sitemap_changefreq ?? undefined) as "monthly",
      priority: homePage.sitemap_priority
        ? Number(homePage.sitemap_priority)
        : undefined,
    });
  }

  const portfolioPage = pagesResult.data.portfolioPage.edges?.[0]?.node;
  if (portfolioPage) {
    urlset.push({
      url: pathAsUrl(`/portfolio`),
      lastModified: portfolioPage._meta.lastPublicationDate,
      changeFrequency: (portfolioPage.sitemap_changefreq ??
        "monthly") as "monthly",
      priority: portfolioPage.sitemap_priority
        ? Number(portfolioPage.sitemap_priority)
        : undefined,
    });
  }

  urlset.push({
    url: pathAsUrl("/about"),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1.0,
  });

  urlset.push({
    url: pathAsUrl("/cookies"),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.1,
  });

  return urlset;
}
