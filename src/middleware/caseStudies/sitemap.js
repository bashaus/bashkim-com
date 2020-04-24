const dayjs = require("dayjs");
const Prismic = require("prismic-javascript");
const Config = require("../../config");
const PrismicClient = require("../../libraries/prismic/client");

const CaseStudiesSitemap = async () => {
  const urlset = [
    {
      url: {
        loc: `${Config.get("sitemap.baseHref")}/portfolio`,
        lastmod: dayjs().format(),
        changefreq: "monthly",
        priority: "0.5",
      },
    },
  ];

  const caseStudies = await PrismicClient().query(
    Prismic.Predicates.at('document.type', 'case_study'),
    {
      pageSize: 100,
    },
  );

  caseStudies.results.forEach((caseStudy) => {
    urlset.push({
      url: {
        loc: `${Config.get("sitemap.baseHref")}/portfolio/${caseStudy.uid}`,
        lastmod: dayjs(caseStudy.last_publication_date).format(),
        changefreq: caseStudy.data.sitemap_changefreq || "monthly",
        priority: caseStudy.data.sitemap_priority || "0.5",
      },
    });
  });

  return urlset;
};

module.exports = CaseStudiesSitemap;
