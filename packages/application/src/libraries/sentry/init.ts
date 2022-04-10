import * as Sentry from "@sentry/browser";
import getConfig from "next/config";

const { publicRuntimeConfig: config } = getConfig();

if (config.sentry.enabled) {
  Sentry.init({
    dsn: config.sentry.dsn,
    environment: config.sentry.environment,
    release: config.sentry.release,
  });
}
