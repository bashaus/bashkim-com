const express = require('express');
const path = require('path');

const SitemapIndex = require('./generators/sitemapindex');
const Sitemap = require('./generators/sitemap');
const config = require('../../config');

const router = express();
router.use(express.static(path.resolve(__dirname, 'public')));
router.get(config.get('sitemap.routes.sitemapIndex.pattern'), SitemapIndex());
router.get(config.get('sitemap.routes.sitemap.pattern'), Sitemap());

module.exports = router;
