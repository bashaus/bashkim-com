import dayjs from 'dayjs';
import Prismic from 'prismic-javascript';

import Config from '../../config';
import PrismicClient from '../../libraries/prismic/client';
import SitemapUrl from '../sitemaps/url';
import CaseStudyContentType from '%libraries/prismic/content-types/case_study/type';

const sitemap = async (): Promise<Array<SitemapUrl>> => {
  const urlset: Array<SitemapUrl> = [];

  /* Portfolio index */
  urlset.push({
    url: {
      loc: `${Config.get('sitemap.baseHref')}/portfolio`,
      lastmod: dayjs().format(),
      changefreq: 'monthly',
      priority: '0.5',
    },
  } as SitemapUrl);

  const caseStudies = await PrismicClient().query(
    Prismic.Predicates.at('document.type', 'case_study'),
    { pageSize: 100 },
  );

  /* Portfolio case studies */
  caseStudies.results.forEach((caseStudy: CaseStudyContentType) => {
    urlset.push({
      url: {
        loc: `${Config.get('sitemap.baseHref')}/portfolio/${caseStudy.uid}`,
        lastmod: dayjs(caseStudy.last_publication_date || undefined).format(),
        changefreq: caseStudy.data.sitemap_changefreq || 'monthly',
        priority: caseStudy.data.sitemap_priority || '0.5',
      },
    } as SitemapUrl);
  });

  return urlset;
};

export default sitemap;
