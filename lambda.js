const awsServerlessExpress = require('aws-serverless-express');
const { app, server } = require('./server');

exports.handler = (event, context) => {
  app.prepare().then(() => awsServerlessExpress.proxy(
    awsServerlessExpress.createServer(server),
    event,
    context,
  ));
};
