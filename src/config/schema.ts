import next, { NextConfig } from "./schema/next";
import prismic, { PrismicConfig } from "./schema/prismic";
import sentry, { SentryConfig } from "./schema/sentry";
import server, { ServerConfig } from "./schema/server";
import sitemap, { SitemapConfig } from "./schema/sitemap";

interface Config {
  next: NextConfig;
  prismic: PrismicConfig;
  sentry: SentryConfig;
  server: ServerConfig;
  sitemap: SitemapConfig;
}

export default (): Config => ({
  next,
  prismic,
  sentry,
  server,
  sitemap,
});
