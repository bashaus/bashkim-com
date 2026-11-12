import { GetSitemapPages } from "@bashkim-com/prismic-dal";
import { MetadataRoute } from "next";

import { locales } from "@/i18n/locale/locale";
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

  const getSitemapPagesResult = await apolloClient.query({
    query: GetSitemapPages,
  });

  const homePage = getSitemapPagesResult.data?.homePage.edges?.[0]?.node;
  if (homePage) {
    urlset.push(
      await sitemapFileSchema.parseAsync({
        lastModified: homePage._meta.lastPublicationDate,
        changeFrequency: homePage.sitemap_changefreq,
        priority: homePage.sitemap_priority,
        paths: Object.fromEntries(
          locales.map((locale) => [locale, getHomePath({ locale })]),
        ),
      }),
    );
  }

  const portfolioPage =
    getSitemapPagesResult.data?.portfolioPage.edges?.[0]?.node;

  if (portfolioPage) {
    urlset.push(
      await sitemapFileSchema.parseAsync({
        lastModified: portfolioPage._meta.lastPublicationDate,
        changeFrequency: portfolioPage.sitemap_changefreq,
        priority: portfolioPage.sitemap_priority,
        paths: Object.fromEntries(
          locales.map((locale) => [locale, getPortfolioPath({ locale })]),
        ),
      }),
    );
  }

  urlset.push(
    await sitemapFileSchema.parseAsync({
      priority: 1,
      paths: Object.fromEntries(
        locales.map((locale) => [locale, getAboutPath({ locale })]),
      ),
    }),

    await sitemapFileSchema.parseAsync({
      priority: 0.1,
      paths: Object.fromEntries(
        locales.map((locale) => [locale, getCookiesPath({ locale })]),
      ),
    }),
  );

  return urlset;
}
