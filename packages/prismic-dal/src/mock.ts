import { getCaseStudiesHandler } from "./queries/get-case-studies/mock";
import { getCaseStudyBodyHandler } from "./queries/get-case-study-body/mock";
import { getCaseStudyPageHandler } from "./queries/get-case-study-page/mock";
import { getHomePageHandler } from "./queries/get-home-page/mock";
import { getPortfolioPageHandler } from "./queries/get-portfolio-page/mock";
import { getSitemapCaseStudiesHandler } from "./queries/get-sitemap-case-studies/mock";
import { getSitemapPagesHandler } from "./queries/get-sitemap-pages/mock";

export const handlers = [
  getCaseStudyBodyHandler,
  getCaseStudyPageHandler,
  getCaseStudiesHandler,
  getHomePageHandler,
  getPortfolioPageHandler,
  getSitemapCaseStudiesHandler,
  getSitemapPagesHandler,
];
