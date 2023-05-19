import {
  GetSitemapCaseStudiesDocument,
  GetSitemapCaseStudiesQuery,
} from "@bashkim-com/prismic-dal";
import { PrismicDate } from "@bashkim-com/prismic-helpers";

import { prismicClient } from "../libraries/prismic/client";
import type { UrlType } from "../templates/sitemap";

export const CaseStudiesSitemap = async () => {
  const urlset: Array<UrlType> = [];
  const baseHref = process.env.APP_SITEMAP_BASE_HREF;

  const caseStudiesResult =
    await prismicClient.query<GetSitemapCaseStudiesQuery>({
      query: GetSitemapCaseStudiesDocument,
    });

  caseStudiesResult.data.caseStudies.edges.forEach(({ node: caseStudy }) => {
    urlset.push({
      url: {
        loc: `${baseHref}/portfolio/${caseStudy._meta.uid}/`,
        lastmod: caseStudy._meta.lastPublicationDate
          ? PrismicDate(caseStudy._meta.lastPublicationDate).toISOString()
          : undefined,
        changefreq: caseStudy.sitemap_changefreq || "monthly",
        priority: caseStudy.sitemap_priority || "0.5",
      },
    });
  });

  return urlset;
};
