import caseStudiesSitemap from '%middleware/caseStudies/sitemap';
import pagesSitemap from '%middleware/pages/sitemap';

const sitemaps: { [key: string]: Function } = {
  caseStudies: caseStudiesSitemap,
  pages: pagesSitemap,
};

export default sitemaps;
