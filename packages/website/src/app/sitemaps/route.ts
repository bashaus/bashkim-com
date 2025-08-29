import { NextResponse } from "next/server";
import builder from "xmlbuilder";

import { pathAsUrl } from "@/libraries/app/path-as-url";

export async function GET() {
  const sitemapIndex = builder
    .create("sitemapindex", { encoding: "UTF-8" })
    // eslint-disable-next-line sonarjs/no-clear-text-protocols
    .attribute("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

  sitemapIndex
    .element("sitemap")
    .element("loc")
    .text(pathAsUrl(`/sitemaps/pages/sitemap.xml`));

  sitemapIndex
    .element("sitemap")
    .element("loc")
    .text(pathAsUrl(`/sitemaps/case-studies/sitemap.xml`));

  const output = sitemapIndex.end({ pretty: true, indent: "" });
  return new NextResponse(output, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
