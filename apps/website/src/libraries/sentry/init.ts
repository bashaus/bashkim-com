import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
const sentryEnabled = process.env.NEXT_PUBLIC_SENTRY_ENABLED;
const sentryEnvironment = process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT;
const sentryRelease = process.env.NEXT_PUBLIC_SENTRY_RELEASE;

Sentry.init({
  dsn: sentryDsn,
  enabled: sentryEnabled === "1",
  environment: sentryEnvironment,
  integrations: [new BrowserTracing()],
  release: sentryRelease,
  tracesSampleRate: 1.0,
});
