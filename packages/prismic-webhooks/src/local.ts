import express from "express";

import { app } from "./app";

const { APP_WEBHOOKS_PORT = 4200 } = process.env;

const server = express();

server.disable("x-powered-by");
server.use(app);

server.listen(APP_WEBHOOKS_PORT, () => {
  console.log(`⚡️ Running at http://localhost:${APP_WEBHOOKS_PORT}`);
});
