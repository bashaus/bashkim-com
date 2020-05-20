/* cwd for serverless */
process.chdir(__dirname);

const { default: config } = require("@bashkim-com/config");
const Raven = require("raven");
const withSentry = require("serverless-sentry-lib");
const awsServerlessExpress = require("aws-serverless-express");
const next = require("next");
const app = next(config.next);

exports.handler = withSentry(async function (event, context) {
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
