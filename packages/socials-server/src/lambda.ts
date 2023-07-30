import {
  handlers,
  startServerAndCreateLambdaHandler,
} from "@as-integrations/aws-lambda";

import { app } from "./app";

export const handler = startServerAndCreateLambdaHandler(
  app,
  handlers.createAPIGatewayProxyEventRequestHandler(),
);
