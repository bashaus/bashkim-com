import express from "express";
import xmlbuilder from "xmlbuilder";

import config from "%config/index";
import sitemaps from "%middleware/sitemaps/sitemaps";

const schema = () => (
  req: express.Request,
  res: express.Response
  // next: express.NextFunction,
): void => {
  const doc = xmlbuilder.create(
    {
      sitemapindex: {
        "@xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9",
        "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "@xsi:schemalocation": [
          "http://www.sitemaps.org/schemas/sitemap/0.9",
          "http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd",
        ].join(" "),
      },
    },
    { encoding: "UTF-8" }
  );

  Object.entries(sitemaps).forEach(([key]) => {
    doc.ele({
      sitemap: {
        loc: `${config.sitemap.baseHref}/sitemap/${key}.xml`,
      },
    });
  });

  res.setHeader("Content-Type", "application/xml");
  res.send(doc.end({ pretty: true }));
};

export default schema;
