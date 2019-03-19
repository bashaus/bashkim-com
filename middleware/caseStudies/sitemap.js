const dayjs = require('dayjs');
const Config = require('../../config');
const { getCaseStudies } = require('../../libraries/prismic/content-types/case_study/api');

module.exports = async function CaseStudiesSitemap() {
  const urlset = [
    {
      url: {
        loc: `${Config.get('sitemap.baseHref')}/portfolio`,
        lastmod: dayjs().format(),
        changefreq: 'monthly',
        priority: '0.5',
      },
    },
  ];

  const caseStudies = await getCaseStudies();

  caseStudies.results.forEach((caseStudy) => {
    urlset.push({
      url: {
        loc: `${Config.get('sitemap.baseHref')}/portfolio/${caseStudy.uid}`,
        lastmod: dayjs(caseStudy.last_publication_date).format(),
        changefreq: caseStudy.data.sitemap_changefreq || 'monthly',
        priority: caseStudy.data.sitemap_priority || '0.5',
      },
    });
  });

  return urlset;
};
