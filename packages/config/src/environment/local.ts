import { ConfigPartialType } from "../types";

import googleAnalytics from "./local/googleAnalytics";
import next from "./local/next";
import sentry from "./local/sentry";
import sitemap from "./local/sitemap";

export const localConfig: ConfigPartialType = {
  googleAnalytics,
  next,
  sentry,
  sitemap,
};
