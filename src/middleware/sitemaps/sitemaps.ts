import caseStudiesSitemap from '../caseStudies/sitemap';
import pagesSitemap from '../pages/sitemap';

const sitemaps: { [key: string]: Function } = {
  caseStudies: caseStudiesSitemap,
  pages: pagesSitemap,
};

export default sitemaps;
