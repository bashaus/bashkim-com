import Raven from 'raven';
import RavenLambdaWrapper from 'serverless-sentry-lib';
import awsServerlessExpress from 'aws-serverless-express';

import { app, server } from './build/server/init';

export default RavenLambdaWrapper.handler(
  Raven,
  async (event, context) => {
    await app.prepare();
    awsServerlessExpress.proxy(
      awsServerlessExpress.createServer(server),
      event,
      context,
    );
  },
);
