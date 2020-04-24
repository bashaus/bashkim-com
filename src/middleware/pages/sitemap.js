const dayjs = require("dayjs");
const Config = require("../../config");

const PagesSitemap = async () => [
  {
    url: {
      loc: `${Config.get("sitemap.baseHref")}/`,
      lastmod: dayjs().format(),
      changefreq: "monthly",
      priority: "0.5",
    },
  },
  {
    url: {
      loc: `${Config.get("sitemap.baseHref")}/about`,
      lastmod: dayjs().format(),
      changefreq: "monthly",
      priority: "0.5",
    },
  },
  {
    url: {
      loc: `${Config.get("sitemap.baseHref")}/legal/cookie-policy`,
      lastmod: dayjs().format(),
      changefreq: "monthly",
      priority: "0.5",
    },
  },
];

module.exports = PagesSitemap;
