process.chdir(__dirname); // set working directory for serverless

const awsServerlessExpress = require("aws-serverless-express");
const { default: config } = require("@bashkim-com/config");
const next = require("next");
const app = next(config.next);

const server = awsServerlessExpress.createServer(app.getRequestHandler());
exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
};
