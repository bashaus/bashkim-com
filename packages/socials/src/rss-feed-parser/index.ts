import { XMLParser } from "fast-xml-parser";

import { rootElementSchema } from "./schema";

export async function parseRssFeed(content: string) {
  const parser = new XMLParser({ ignoreAttributes: false });
  const fixture = parser.parse(content);
  return await rootElementSchema.parseAsync(fixture);
}
