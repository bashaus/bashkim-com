import type { DeepPartial } from "utility-types";

import type { GoogleAnalyticsConfig } from "./types/googleAnalytics";
import type { NextConfig } from "./types/next";
import type { PrismicConfig } from "./types/prismic";
import type { SentryConfig } from "./types/sentry";
import type { ServerConfig } from "./types/server";
import type { SitemapConfig } from "./types/sitemap";

export type ConfigType = {
  googleAnalytics: GoogleAnalyticsConfig;
  next: NextConfig;
  prismic: PrismicConfig;
  sentry: SentryConfig;
  server: ServerConfig;
  sitemap: SitemapConfig;
};

export type ConfigPartialType = DeepPartial<ConfigType>;
