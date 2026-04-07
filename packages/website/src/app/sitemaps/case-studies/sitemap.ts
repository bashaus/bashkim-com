import { GetSitemapCaseStudies } from "@bashkim-com/prismic-dal";
import { MetadataRoute } from "next";

import { getCaseStudyPath } from "@/libraries/app/navigation";
import { sitemapFileSchema } from "@/libraries/app/sitemap";
import { apolloClient } from "@/libraries/prismic/client";

export default async function CaseStudiesSitemapProps(): Promise<MetadataRoute.Sitemap> {
  const urlset: MetadataRoute.Sitemap = [];

  const getSitemapCaseStudiesResult = await apolloClient.query({
    query: GetSitemapCaseStudies,
  });

  const edges = getSitemapCaseStudiesResult.data?.caseStudies.edges ?? [];
  for (const edge of edges) {
    const caseStudy = edge?.node;
    if (!caseStudy) {
      continue;
    }

    urlset.push(
      await sitemapFileSchema.parseAsync({
        paths: {
          en: getCaseStudyPath({ caseStudySlug: caseStudy._meta.uid ?? "" }),
        },
        lastModified: caseStudy._meta.lastPublicationDate,
        changeFrequency: caseStudy.sitemap_changefreq,
        priority: caseStudy.sitemap_priority,
      }),
    );
  }

  return urlset;
}
