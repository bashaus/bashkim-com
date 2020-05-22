process.chdir(__dirname); // set working directory for serverless

const withSentry = require("serverless-sentry-lib");
const awsServerlessExpress = require("aws-serverless-express");
const { default: config } = require("@bashkim-com/config");
const next = require("next");
const app = next(config.next);

const server = awsServerlessExpress.createServer(app.getRequestHandler());
exports.handler = withSentry((event, context) =>
  awsServerlessExpress.proxy(server, event, context)
);
