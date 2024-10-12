import * as Sentry from "@sentry/browser";

const {
  NEXT_PUBLIC_SENTRY_DSN: sentryDsn,
  NEXT_PUBLIC_SENTRY_ENABLED: sentryEnabled,
  NEXT_PUBLIC_SENTRY_ENVIRONMENT: sentryEnvironment,
  NEXT_PUBLIC_SENTRY_RELEASE: sentryRelease,
} = process.env;

Sentry.init({
  dsn: sentryDsn,
  enabled: sentryEnabled === "1",
  environment: sentryEnvironment,
  integrations: [Sentry.browserTracingIntegration()],
  release: sentryRelease,
  tracesSampleRate: 1.0,
});
