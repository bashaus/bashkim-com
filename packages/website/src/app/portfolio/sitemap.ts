import {
  GetSitemapCaseStudiesDocument,
  GetSitemapCaseStudiesQuery,
} from "@bashkim-com/prismic-dal";
import { MetadataRoute } from "next";
import { Date as PrismicDate } from "prismic-reactjs";

import { prismicClient } from "../../libraries/prismic/PrismicClient";

export async function generateSitemaps() {
  return [{ id: "case-studies" }];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urlset = [];

  const caseStudiesResult =
    await prismicClient.query<GetSitemapCaseStudiesQuery>({
      query: GetSitemapCaseStudiesDocument,
    });

  caseStudiesResult.data.caseStudies.edges?.forEach((edge) => {
    if (edge?.node) {
      const caseStudy = edge?.node;
      urlset.push({
        url: `https://www.bashkim.com/portfolio/${caseStudy._meta.uid}/`,
        lastModified: PrismicDate(
          caseStudy._meta.lastPublicationDate,
        ).toISOString(),
        changeFrequency: caseStudy.sitemap_changefreq || "monthly",
        priority: caseStudy.sitemap_priority || "0.5",
      });
    }
  });

  return urlset;
}
