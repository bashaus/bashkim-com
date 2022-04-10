import { config } from "@bashkim-com/config";
import * as Sentry from "@sentry/serverless";
import serverlessExpress from "@vendia/serverless-express";

import { app } from "./app";

Sentry.AWSLambda.init({
  dsn: config.sentry.dsn,
  enabled: config.sentry.enabled,
  release: config.sentry.release,
  tracesSampleRate: 1.0,
});

export const handler = Sentry.AWSLambda.wrapHandler(serverlessExpress({ app }));
