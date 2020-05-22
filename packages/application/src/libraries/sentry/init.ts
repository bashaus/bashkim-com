import getConfig from "next/config";
import * as Sentry from "@sentry/browser";

const { publicRuntimeConfig: config } = getConfig();

if (config.sentry.enabled) {
  Sentry.init({
    dsn: config.sentry.dsn,
    environment: config.sentry.environment,
    release: `${config.sentry.project}@${config.sentry.commit}`,
  });
}
