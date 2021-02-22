import type { SentryConfig } from "@bashkim-com/config/types/sentry";

const defaultSentryConfig: SentryConfig = {
  enabled: true,
  dsn: process.env.SENTRY_DSN || "",
  project: "bashkim-com",
  commit: process.env.GIT_COMMIT || undefined,
  environment: process.env.APP_ENV || "production",
};

export default defaultSentryConfig;
