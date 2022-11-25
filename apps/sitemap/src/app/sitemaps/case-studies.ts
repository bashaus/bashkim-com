import { Date as PrismicDate } from "prismic-reactjs";

import { prismicClient } from "../libraries/prismic/client";
import { CaseStudiesQuery } from "../libraries/prismic/queries/caseStudies";
import { UrlType } from "../templates/sitemap";

export const CaseStudiesSitemap = async (): Promise<Array<UrlType>> => {
  const urlset: Array<UrlType> = [];
  const baseHref = process.env.APP_SITEMAP_BASE_HREF;

  /* Portfolio index */
  urlset.push({
    url: {
      loc: `${baseHref}/portfolio/`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "1.0",
    },
  } as UrlType);

  /* Portfolio case studies */
  const result = await prismicClient.query({
    query: CaseStudiesQuery,
  });

  result.data.caseStudies.edges.forEach(({ node: caseStudy }) => {
    urlset.push({
      url: {
        loc: `${baseHref}/portfolio/${caseStudy._meta.uid}/`,
        lastmod: caseStudy._meta.lastPublicationDate
          ? PrismicDate(caseStudy._meta.lastPublicationDate).toISOString()
          : undefined,
        changefreq: caseStudy.sitemap_changefreq || "monthly",
        priority: caseStudy.sitemap_priority || "0.5",
      },
    } as UrlType);
  });

  return urlset;
};
