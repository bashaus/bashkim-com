const dayjs = require('dayjs');
const config = require('../../config');

module.exports = async function PagesSitemap() {
  return [
    {
      url: {
        loc: `${config.get('sitemap.baseHref')}/`,
        lastMod: dayjs().format(),
        changefreq: 'monthly',
        priority: '0.5',
      },
    },
    {
      url: {
        loc: `${config.get('sitemap.baseHref')}/about`,
        lastMod: dayjs().format(),
        changefreq: 'monthly',
        priority: '0.5',
      },
    },
    {
      url: {
        loc: `${config.get('sitemap.baseHref')}/blog`,
        lastMod: dayjs().format(),
        changefreq: 'monthly',
        priority: '0.5',
      },
    },
    {
      url: {
        loc: `${config.get('sitemap.baseHref')}/legal/cookie-policy`,
        lastMod: dayjs().format(),
        changefreq: 'monthly',
        priority: '0.5',
      },
    },
  ];
};
