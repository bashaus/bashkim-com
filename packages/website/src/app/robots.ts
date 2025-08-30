import type { MetadataRoute } from "next";

import { pathAsUrl } from "@/libraries/app/path-as-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: pathAsUrl("/sitemap.xml"),
  };
}
