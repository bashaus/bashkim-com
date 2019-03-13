const express = require('express');
const path = require('path');

const SitemapIndex = require('./generators/sitemapindex');
const Sitemap = require('./generators/sitemap');
const config = require('../../config');

function SitemapRouter() {
  this.getRequestHandler = () => {
    const sitemap = express();
    sitemap.use(express.static(path.resolve(__dirname, 'public')));
    sitemap.get(config.get('sitemap.routes.sitemapIndex.pattern'), SitemapIndex());
    sitemap.get(config.get('sitemap.routes.sitemap.pattern'), Sitemap());
    return sitemap;
  };
}

module.exports = SitemapRouter;
