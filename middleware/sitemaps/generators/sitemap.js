const path = require('path');
const xmlbuilder = require('xmlbuilder');

const Config = require('../../../config');

function Sitemap() {
  return async (req, res, next) => {
    const doc = xmlbuilder.create({
      urlset: {
        '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
        '@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        '@xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',
        '@xsi:schemalocation': [
          'http://www.sitemaps.org/schemas/sitemap/0.9',
          'http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
          'http://www.google.com/schemas/sitemap-image/1.1',
          'http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd',
        ].join(' '),
      },
    }, { encoding: 'UTF-8' });

    const { indexSlug } = req.params;
    const indexes = Config.get('sitemap.indexes');

    // If this page is not in the valid list of sitemaps
    if (!indexes[indexSlug]) {
      return next();
    }

    const indexFile = indexes[indexSlug];

    delete require.cache[indexFile];
    const indexFunc = require(path.resolve(indexFile));

    const urlset = await indexFunc();
    urlset.map(url => doc.ele(url));

    res.setHeader('Content-Type', 'application/xml');
    res.send(doc.end({ pretty: true }));
  };
}

module.exports = Sitemap;
