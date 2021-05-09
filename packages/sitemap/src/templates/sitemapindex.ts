import type express from "express";
import { create as xmlCreate } from "xmlbuilder";

export type SitemapType = {
  sitemap: {
    loc: string;
  };
};

export const SitemapIndexTemplate = (
  sitemaps: () => Promise<Array<SitemapType>>
) => {
  return async (
    _req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const doc = xmlCreate(
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

    const sitemapIndexes = await sitemaps();
    sitemapIndexes.forEach((sitemap: SitemapType) => doc.ele(sitemap));

    res.setHeader("Content-Type", "application/xml");
    res.send(doc.end({ pretty: true }));
  };
};
