import dayjs from 'dayjs';

import Config from '../../config';
import SitemapUrl from '../sitemaps/url';

const sitemap = (): Promise<Array<SitemapUrl>> => {
  const urlset: Array<SitemapUrl> = [];

  urlset.push({
    url: {
      loc: `${Config.get('sitemap.baseHref')}/`,
      lastmod: dayjs().format(),
      changefreq: 'monthly',
      priority: '0.5',
    },
  } as SitemapUrl);

  urlset.push({
    url: {
      loc: `${Config.get('sitemap.baseHref')}/about`,
      lastmod: dayjs().format(),
      changefreq: 'monthly',
      priority: '0.5',
    },
  } as SitemapUrl);

  urlset.push({
    url: {
      loc: `${Config.get('sitemap.baseHref')}/legal/cookie-policy`,
      lastmod: dayjs().format(),
      changefreq: 'monthly',
      priority: '0.5',
    },
  } as SitemapUrl);

  return Promise.resolve(urlset);
};

export default sitemap;
