import "@bashkim-com/xray-lambda";

import serverlessExpress from "@vendia/serverless-express";
import express from "express";

import { app } from "./app";

const server = express();
server.use("/:stage", app);

export const handler = serverlessExpress({ app: server });
