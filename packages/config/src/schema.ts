import next, { NextConfig } from "./schema/next";
import prismic, { PrismicConfig } from "./schema/prismic";
import server, { ServerConfig } from "./schema/server";
import sitemap, { SitemapConfig } from "./schema/sitemap";

export interface Config {
  next: NextConfig;
  prismic: PrismicConfig;
  server: ServerConfig;
  sitemap: SitemapConfig;
}

const Schema = (): Config => {
  return {
    next,
    prismic,
    server,
    sitemap,
  };
};

export default Schema;
