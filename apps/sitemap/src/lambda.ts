import * as Sentry from "@sentry/serverless";
import serverlessExpress from "@vendia/serverless-express";

import { app } from "./app";

Sentry.AWSLambda.init({
  dsn: process.env.SENTRY_DSN,
  enabled: !!process.env.SENTRY_ENABLED,
  release: process.env.GIT_COMMIT,
  tracesSampleRate: 1.0,
});

export const handler = Sentry.AWSLambda.wrapHandler(serverlessExpress({ app }));
