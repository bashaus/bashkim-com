import "@bashkim-com/xray-lambda";

import {
  handlers,
  startServerAndCreateLambdaHandler,
} from "@as-integrations/aws-lambda";

import { app } from "./app";

export const handler = startServerAndCreateLambdaHandler(
  app,
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
);
