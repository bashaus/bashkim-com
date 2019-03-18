const dayjs = require('dayjs');
const caseStudies = require('../../data/caseStudies');
const Config = require('../../config');

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

  Object.entries(caseStudies).forEach(([caseStudySlug, caseStudy]) => {
    urlset.push({
      url: {
        loc: `${Config.get('sitemap.baseHref')}/portfolio/${caseStudy.slug}`,
        lastmod: dayjs().format(),
        changefreq: 'monthly',
        priority: '0.5',
      },
    });
  });

  return urlset;
};
