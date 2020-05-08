import dayjs from 'dayjs';

import config from '%config/index';
import SitemapUrl from '%middleware/sitemaps/url';

const sitemap = (): Promise<Array<SitemapUrl>> => {
  const urlset: Array<SitemapUrl> = [];

  urlset.push({
    url: {
      loc: `${config.sitemap.baseHref}/`,
      lastmod: dayjs().format(),
      changefreq: 'monthly',
      priority: '0.5',
    },
  } as SitemapUrl);

  urlset.push({
    url: {
      loc: `${config.sitemap.baseHref}/about`,
      lastmod: dayjs().format(),
      changefreq: 'monthly',
      priority: '0.5',
    },
  } as SitemapUrl);

  urlset.push({
    url: {
      loc: `${config.sitemap.baseHref}/legal/cookie-policy`,
      lastmod: dayjs().format(),
      changefreq: 'monthly',
      priority: '0.5',
    },
  } as SitemapUrl);

  return Promise.resolve(urlset);
};

export default sitemap;
