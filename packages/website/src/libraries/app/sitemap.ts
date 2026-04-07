import { MetadataRoute } from "next";
import { z } from "zod";

import { pathAsUrl } from "@/libraries/app/path-as-url";

const defaultLocale = "en";

export const sitemapFileSchema = z
  .object({
    paths: z.record(z.string(), z.string()),
    lastModified: z.coerce.date().default(new Date()),
    changeFrequency: z
      .enum([
        "never",
        "monthly",
        "always",
        "hourly",
        "daily",
        "weekly",
        "yearly",
      ])
      .default("monthly"),
    priority: z.coerce.number().min(0).max(1).multipleOf(0.1).default(0.5),
  })
  .transform<MetadataRoute.Sitemap[number]>((entry) => {
    const paths = Object.entries(entry.paths);
    const defaultPath = paths.find(([locale]) => locale === defaultLocale);
    const altPaths = paths.filter(([locale]) => locale !== defaultLocale);

    return {
      url: defaultPath ? pathAsUrl(defaultPath[1]) : "",
      alternates: {
        languages: {
          ...Object.fromEntries(
            altPaths.map(([locale, path]) => [locale, pathAsUrl(path)]),
          ),
        },
      },
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      lastModified: entry.lastModified,
    };
  });
