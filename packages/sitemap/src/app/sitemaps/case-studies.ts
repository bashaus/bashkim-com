import {
  GetSitemapCaseStudiesDocument,
  GetSitemapCaseStudiesQuery,
} from "@bashkim-com/prismic-dal";
import { PrismicDate } from "@bashkim-com/prismic-helpers";

import { prismicClient } from "../libraries/prismic/client";
import type { UrlType } from "../templates/sitemap";

export const CaseStudiesSitemap = async () => {
  const urlset: Array<UrlType> = [];
  const { APP_SITEMAP_BASE_HREF: baseHref } = process.env;

  const caseStudiesResult =
    await prismicClient.query<GetSitemapCaseStudiesQuery>({
      query: GetSitemapCaseStudiesDocument,
    });

  caseStudiesResult.data.caseStudies.edges?.forEach((edge) => {
    if (edge?.node) {
      const caseStudy = edge?.node;
      urlset.push({
        url: {
          loc: `${baseHref}/portfolio/${caseStudy._meta.uid}/`,
          lastmod: PrismicDate(
            caseStudy._meta.lastPublicationDate,
          ).toISOString(),
          changefreq: caseStudy.sitemap_changefreq || "monthly",
          priority: caseStudy.sitemap_priority || "0.5",
        },
      });
    }
  });

  return urlset;
};
