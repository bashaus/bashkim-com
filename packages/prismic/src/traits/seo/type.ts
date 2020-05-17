interface SeoPrismicTrait {
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  sitemap_changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  sitemap_priority:
    | "0.1"
    | "0.2"
    | "0.3"
    | "0.4"
    | "0.5"
    | "0.6"
    | "0.7"
    | "0.8"
    | "0.9"
    | "1.0";
}

export default SeoPrismicTrait;
