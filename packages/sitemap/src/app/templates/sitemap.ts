import type express from "express";
import { create as xmlCreate } from "xmlbuilder";

export type UrlType = {
  url: {
    loc: string;
    lastmod: string;
    changefreq: string | undefined;
    priority: string | undefined;
  };
};

export const SitemapTemplate = (sitemap: () => Promise<Array<UrlType>>) => {
  return async (
    _req: express.Request,
    res: express.Response,
  ): Promise<void> => {
    const doc = xmlCreate(
      {
        urlset: {
          "@xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9",
          "@xmlns:xsi": "https://www.w3.org/2001/XMLSchema-instance",
          "@xmlns:image": "https://www.google.com/schemas/sitemap-image/1.1",
          "@xsi:schemalocation": [
            "http://www.sitemaps.org/schemas/sitemap/0.9",
            "https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd",
            "https://www.google.com/schemas/sitemap-image/1.1",
            "https://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd",
          ].join(" "),
        },
      },
      { encoding: "UTF-8" },
    );

    const urlset = await sitemap();
    urlset.forEach((url: UrlType) => doc.ele(url));

    res.setHeader("Content-Type", "application/xml");
    res.send(doc.end({ pretty: true }));
  };
};
