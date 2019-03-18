const xmlbuilder = require('xmlbuilder');
const Config = require('../../../config');

function SitemapIndex() {
  return (req, res, next) => {
    const doc = xmlbuilder.create({
      sitemapindex: {
        '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
        '@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        '@xsi:schemalocation': [
          'http://www.sitemaps.org/schemas/sitemap/0.9',
          'http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
        ].join(' '),
      },
    }, { encoding: 'UTF-8' });

    Object.entries(Config.get('sitemap.indexes')).forEach(
      ([key, value]) => {
        doc.ele({
          sitemap: {
            loc: `${Config.get('sitemap.baseHref')}/sitemap/${key}`,
          },
        });
      },
    );

    res.setHeader('Content-Type', 'application/xml');
    res.send(doc.end({ pretty: true }));
  };
}

module.exports = SitemapIndex;
