const dayjs = require('dayjs');
const config = require('../../config');

module.exports = async function PagesSitemap() {
  return [
    {
      url: {
        loc: `${config.get('sitemap.baseHref')}/`,
        lastmod: dayjs().format(),
        changefreq: 'monthly',
        priority: '0.5',
      },
    },
    {
      url: {
        loc: `${config.get('sitemap.baseHref')}/about`,
        lastmod: dayjs().format(),
        changefreq: 'monthly',
        priority: '0.5',
      },
    },
    {
      url: {
        loc: `${config.get('sitemap.baseHref')}/legal/cookie-policy`,
        lastmod: dayjs().format(),
        changefreq: 'monthly',
        priority: '0.5',
      },
    },
  ];
};
