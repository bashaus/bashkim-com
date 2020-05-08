const tsConfig = require("./tsconfig.json");
const tsConfigRun = require("./tsconfig.run.json");
const tsConfigPaths = require("tsconfig-paths");
tsConfigPaths.register({
  baseUrl: tsConfigRun.compilerOptions.baseUrl,
  paths: tsConfig.compilerOptions.paths
});

const Raven = require('raven');
const RavenLambdaWrapper = require('serverless-sentry-lib');
const awsServerlessExpress = require('aws-serverless-express');

const { app, server } = require('./build/server/init');

module.exports.handler = RavenLambdaWrapper.handler(
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
