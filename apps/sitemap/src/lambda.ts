import * as Sentry from "@sentry/serverless";
import serverlessExpress from "@vendia/serverless-express";

import { app } from "./app";

Sentry.AWSLambda.init({
  dsn: process.env.SENTRY_DSN,
  enabled: !!process.env.SENTRY_ENABLED,
  environment: process.env.SENTRY_ENVIRONMENT,
  release: process.env.SENTRY_RELEASE,
  tracesSampleRate: 1.0,
});

export const handler = Sentry.AWSLambda.wrapHandler(serverlessExpress({ app }));
