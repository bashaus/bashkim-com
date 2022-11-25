import express, { json } from "express";

import { router as prismicRouter } from "./routes/prismic";
import { router as healthRouter } from "./routes/health";

export const app = express();

app.disable("x-powered-by");
app.use(json());

app.use("/webhooks/prismic", prismicRouter);
app.use("/.well-known/prismic-webhooks/health", healthRouter);
