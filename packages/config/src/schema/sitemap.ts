export interface SitemapConfig {
  baseHref: string;
}

const defaultSitemapConfig: SitemapConfig = {
  /**
   * The root URL of the site (no trailing slash)
   */
  baseHref: "https://www.bashkim.com",
};

export default defaultSitemapConfig;
