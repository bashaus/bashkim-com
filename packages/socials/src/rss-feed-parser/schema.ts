import { z } from "zod";

export const itemElementSchema = z.object({
  title: z.string(),
  link: z.url(),
  guid: z.object({
    "#text": z.string(),
    "@_isPermaLink": z.stringbool(),
  }),
  category: z.union([z.string(), z.array(z.string())]),
  "dc:creator": z.string(),
  pubDate: z.coerce.date(),
  "atom:updated": z.string(),
  "content:encoded": z.string(),
});

export const channelElementSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.url(),
  image: z.object({
    url: z.url(),
    title: z.string(),
    link: z.url(),
  }),
  generator: z.string(),
  lastBuildDate: z.coerce.date(),
  "atom:link": z.array(
    z.object({
      "@href": z.url().optional(),
      "@rel": z.string().optional(),
      "@type": z.string().optional(),
    }),
  ),
  webMaster: z.string(),
  item: z.array(itemElementSchema),
});

export const rssElementSchema = z.object({
  channel: channelElementSchema,
});

export const rootElementSchema = z.object({
  rss: rssElementSchema,
});

export type RootElement = z.infer<typeof rootElementSchema>;
