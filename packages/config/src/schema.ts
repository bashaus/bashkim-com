import googleAnalytics, {
  GoogleAnalyticsConfig,
} from "./schema/googleAnalytics";
import next, { NextConfig } from "./schema/next";
import prismic, { PrismicConfig } from "./schema/prismic";
import sentry, { SentryConfig } from "./schema/sentry";
import server, { ServerConfig } from "./schema/server";
import sitemap, { SitemapConfig } from "./schema/sitemap";

export interface Config {
  googleAnalytics: GoogleAnalyticsConfig;
  next: NextConfig;
  prismic: PrismicConfig;
  sentry: SentryConfig;
  server: ServerConfig;
  sitemap: SitemapConfig;
}

const Schema = (): Config => {
  return {
    next,
    googleAnalytics,
    prismic,
    sentry,
    server,
    sitemap,
  };
};

export default Schema;
