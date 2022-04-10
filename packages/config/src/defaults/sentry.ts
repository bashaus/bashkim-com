import type { SentryConfig } from "types/sentry";

export const sentry: SentryConfig = {
  enabled: true,
  dsn: process.env.SENTRY_DSN || "",
  release: process.env.GIT_COMMIT || undefined,
  environment: process.env.APP_ENV || "production",
};
