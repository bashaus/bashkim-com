import express from 'express';

import SitemapIndex from './generators/sitemapindex';
import Sitemap from './generators/sitemap';

const router = express();
router.get('/sitemap.xml', SitemapIndex());
router.get('/sitemap/:indexSlug.xml', Sitemap());

export default router;
