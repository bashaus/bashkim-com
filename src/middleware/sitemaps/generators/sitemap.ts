import express from "express";
import xmlbuilder from "xmlbuilder";

import SitemapUrl from "%middleware/sitemaps/url";
import sitemaps from "%middleware/sitemaps/sitemaps";

const schema = () => async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  const doc = xmlbuilder.create(
    {
      urlset: {
        "@xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9",
        "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "@xmlns:image": "http://www.google.com/schemas/sitemap-image/1.1",
        "@xsi:schemalocation": [
          "http://www.sitemaps.org/schemas/sitemap/0.9",
          "http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd",
          "http://www.google.com/schemas/sitemap-image/1.1",
          "http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd",
        ].join(" "),
      },
    },
    { encoding: "UTF-8" }
  );

  const { indexSlug } = req.params;

  // If this page is not in the valid list of sitemaps
  if (typeof sitemaps[indexSlug] === typeof undefined) {
    next();
    return;
  }

  const sitemap = sitemaps[indexSlug];

  const urlset = await sitemap();
  urlset.map((url: SitemapUrl) => doc.ele(url));

  res.setHeader("Content-Type", "application/xml");
  res.send(doc.end({ pretty: true }));
};

export default schema;
