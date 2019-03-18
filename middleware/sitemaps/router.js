const express = require('express');
const path = require('path');

const SitemapIndex = require('./generators/sitemapindex');
const Sitemap = require('./generators/sitemap');
const Config = require('../../config');

const router = express();
router.use(express.static(path.resolve(__dirname, 'public')));
router.get(Config.get('sitemap.routes.sitemapIndex.pattern'), SitemapIndex());
router.get(Config.get('sitemap.routes.sitemap.pattern'), Sitemap());

module.exports = router;
