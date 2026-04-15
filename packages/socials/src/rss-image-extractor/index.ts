import * as cheerio from "cheerio";

export function extractRssImage(html: string) {
  const $ = cheerio.load(html);

  const image = $("img").first();
  if (image.length === 0) {
    return undefined;
  }

  const src = image.attr("src");
  if (!src) {
    return undefined;
  }

  const alt = image.attr("alt") ?? "";
  return { src, alt };
}
