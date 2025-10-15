import {
  GetSitemapPagesDocument,
  GetSitemapPagesQuery,
} from "@bashkim-com/prismic-dal";
import { MetadataRoute } from "next";

import {
  getAboutPath,
  getCookiesPath,
  getHomePath,
  getPortfolioPath,
} from "@/libraries/app/navigation";
import { sitemapFileSchema } from "@/libraries/app/sitemap";
import { apolloClient } from "@/libraries/prismic/client";

export default async function PagesSitemap(): Promise<MetadataRoute.Sitemap> {
  const urlset: MetadataRoute.Sitemap = [];

  const pagesResult = await apolloClient.query<GetSitemapPagesQuery>({
    query: GetSitemapPagesDocument,
  });

  const homePage = pagesResult.data.homePage.edges?.[0]?.node;
  if (homePage) {
    urlset.push(
      await sitemapFileSchema.parseAsync({
        paths: [["en", getHomePath({})]],
        lastModified: homePage._meta.lastPublicationDate,
        changeFrequency: homePage.sitemap_changefreq,
        priority: homePage.sitemap_priority,
      }),
    );
  }

  const portfolioPage = pagesResult.data.portfolioPage.edges?.[0]?.node;
  if (portfolioPage) {
    urlset.push(
      await sitemapFileSchema.parseAsync({
        paths: [["en", getPortfolioPath({})]],
        lastModified: portfolioPage._meta.lastPublicationDate,
        changeFrequency: portfolioPage.sitemap_changefreq,
        priority: portfolioPage.sitemap_priority,
      }),
    );
  }

  urlset.push(
    await sitemapFileSchema.parseAsync({
      paths: [["en", getAboutPath({})]],
      priority: 1,
    }),
  );

  urlset.push(
    await sitemapFileSchema.parseAsync({
      paths: [["en", getCookiesPath({})]],
      priority: 0.1,
    }),
  );

  return urlset;
}
