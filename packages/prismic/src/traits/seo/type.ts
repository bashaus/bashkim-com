export enum SeoTraitSitemapChangefreq {
  ALWAYS = "always",
  HOURLY = "hourly",
  DAILY = "daily",
  WEEKLY = "weekly",
  MONTHLY = "monthly",
  YEARLY = "yearly",
  NEVER = "never",
}

export enum SeoTraitSitemapPriority {
  PRIORITY_0_1 = "0.1",
  PRIORITY_0_2 = "0.2",
  PRIORITY_0_3 = "0.3",
  PRIORITY_0_4 = "0.4",
  PRIORITY_0_5 = "0.5",
  PRIORITY_0_6 = "0.6",
  PRIORITY_0_7 = "0.7",
  PRIORITY_0_8 = "0.8",
  PRIORITY_0_9 = "0.9",
  PRIORITY_1_0 = "1.0",
}

export type SeoTraitType = {
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  sitemap_changefreq: SeoTraitSitemapChangefreq | null;
  sitemap_priority: SeoTraitSitemapPriority | null;
};
