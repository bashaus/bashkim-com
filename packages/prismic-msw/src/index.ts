import { getCaseStudiesHandler } from "./prismic/handlers/get-case-studies";
import { getHomePageHandler } from "./prismic/handlers/get-home-page";
import { getPortfolioPageHandler } from "./prismic/handlers/get-portfolio-page";
import { getSitemapCaseStudiesHandler } from "./prismic/handlers/get-sitemap-case-studies";
import { getSitemapPagesHandler } from "./prismic/handlers/get-sitemap-pages";

export const handlers = [
  getCaseStudiesHandler,
  getHomePageHandler,
  getPortfolioPageHandler,
  getSitemapCaseStudiesHandler,
  getSitemapPagesHandler,
];
