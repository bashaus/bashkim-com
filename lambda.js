const Raven = require("raven");
const RavenLambdaWrapper = require("serverless-sentry-lib");

const awsServerlessExpress = require("aws-serverless-express");
const { app, server } = require("./server");

exports.handler = RavenLambdaWrapper.handler(Raven, (event, context) => {
  app
    .prepare()
    .then(() =>
      awsServerlessExpress.proxy(
        awsServerlessExpress.createServer(server),
        event,
        context
      )
    );
});
