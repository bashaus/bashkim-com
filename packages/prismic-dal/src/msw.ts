import { getCaseStudiesHandler } from "./queries/get-case-studies/mock";
import { getHomePageHandler } from "./queries/get-home-page/mock";
import { getPortfolioPageHandler } from "./queries/get-portfolio-page/mock";
import { getSitemapCaseStudiesHandler } from "./queries/get-sitemap-case-studies/mock";
import { getSitemapPagesHandler } from "./queries/get-sitemap-pages/mock";

export const handlers = [
  getCaseStudiesHandler,
  getHomePageHandler,
  getPortfolioPageHandler,
  getSitemapCaseStudiesHandler,
  getSitemapPagesHandler,
];
