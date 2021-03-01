process.chdir(__dirname); // set working directory for serverless

const withSentry = require("serverless-sentry-lib");
const serverlessExpress = require("@vendia/serverless-express");
const { default: config } = require("@bashkim-com/config");
const next = require("next");
const app = next(config.next);

exports.handler = withSentry(
  serverlessExpress({ app: app.getRequestHandler() })
);
