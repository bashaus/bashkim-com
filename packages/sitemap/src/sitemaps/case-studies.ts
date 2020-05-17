import dayjs from "dayjs";
import Prismic from "prismic-javascript";
import config from "@bashkim-com/config";
import PrismicClient, { CaseStudyContentType } from "@bashkim-com/prismic";

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
  const caseStudies = await PrismicClient().query(
    Prismic.Predicates.at("document.type", "case_study"),
    { pageSize: 100 }
  );

  caseStudies.results.forEach((caseStudy: CaseStudyContentType) => {
    urlset.push({
      url: {
        loc: `${config.sitemap.baseHref}/portfolio/${caseStudy.uid}`,
        lastmod: dayjs(caseStudy.last_publication_date || undefined).format(),
        changefreq: caseStudy.data.sitemap_changefreq || "monthly",
        priority: caseStudy.data.sitemap_priority || "0.5",
      },
    } as UrlType);
  });

  return urlset;
};

export default CaseStudiesSitemap;
