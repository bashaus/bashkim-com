import express from "express";
import xmlbuilder from "xmlbuilder";

export type UrlType = {
  url: {
    loc: string;
    lastmod: string;
    changefreq: string;
    priority: string;
  };
};

const SitemapTemplate = (sitemap: () => Promise<Array<UrlType>>) => {
  return async (
    _req: express.Request,
    res: express.Response
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

    const urlset = await sitemap();
    urlset.map((url: UrlType) => doc.ele(url));

    res.setHeader("Content-Type", "application/xml");
    res.send(doc.end({ pretty: true }));
  };
};

export default SitemapTemplate;
