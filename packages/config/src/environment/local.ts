import { ConfigPartialType } from "../types";

export const localConfig: ConfigPartialType = {
  googleAnalytics: {
    enabled: false,
  },
  next: {
    dev: true,
  },
  sentry: {
    enabled: false,
  },
  sitemap: {
    baseHref: "http://localhost:3000",
  },
};
