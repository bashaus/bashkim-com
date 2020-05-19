const { default: config } = require("@bashkim-com/config");
const Raven = require("raven");
const RavenLambdaWrapper = require("serverless-sentry-lib");
const awsServerlessExpress = require("aws-serverless-express");
const next = require("next");
const app = next(config.next);

module.exports.handler = RavenLambdaWrapper.handler(Raven, (event, context) => {
  app
    .prepare()
    .then(() =>
      awsServerlessExpress.proxy(
        awsServerlessExpress.createServer(app),
        event,
        context
      )
    )
    .catch((err) => {
      throw err;
    });
});
