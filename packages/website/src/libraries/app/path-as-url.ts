import { z } from "zod";

const baseHrefSchema = z.httpUrl().default("https://www.bashkim.com");

export function pathAsUrl(pathname: string) {
  const baseHref = baseHrefSchema.parse(process.env["BASHKIM_BASE_HREF"]);
  const url = new URL(pathname, baseHref);
  return url.toString();
}
