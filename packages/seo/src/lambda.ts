import Lambda from "aws-lambda";
import awsServerlessExpress from "aws-serverless-express";
import app from "./app";

const server = awsServerlessExpress.createServer(app);

export const handler = (
  event: Lambda.APIGatewayEvent,
  context: Lambda.Context
): void => {
  awsServerlessExpress.proxy(server, event, context);
};
