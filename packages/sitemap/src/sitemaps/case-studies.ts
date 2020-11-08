import dayjs from "dayjs";
import config from "@bashkim-com/config";
import PrismicClient, { CaseStudyContentType } from "@bashkim-com/prismic";

import { CaseStudiesQuery } from "../prismic/queries/caseStudies";
import { UrlType } from "../templates/sitemap";

export const CaseStudiesSitemap = async (): Promise<Array<UrlType>> => {
  const urlset: Array<UrlType> = [];

  /* Portfolio index */
  urlset.push({
    url: {
      loc: `${config.sitemap.baseHref}/portfolio`,
      lastmod: dayjs().format(),
      changefreq: "monthly",
      priority: "1.0",
    },
  } as UrlType);

  /* Portfolio case studies */
  const result = await PrismicClient.query({
    query: CaseStudiesQuery,
  });

  result.data.caseStudies.edges.forEach((edge: CaseStudyContentType) => {
    const caseStudy = edge.node;

    urlset.push({
      url: {
        loc: `${config.sitemap.baseHref}/portfolio/${caseStudy._meta.uid}`,
        lastmod: dayjs(caseStudy._meta.lastPublicationDate).format(),
        changefreq: caseStudy.sitemap_changefreq || "monthly",
        priority: caseStudy.sitemap_priority || "0.5",
      },
    } as UrlType);
  });

  return urlset;
};

export default CaseStudiesSitemap;
