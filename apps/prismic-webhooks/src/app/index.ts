import express, { json } from "express";

import { router as healthRouter } from "./routes/health";
import { router as prismicRouter } from "./routes/prismic";

export const app = express();

app.disable("x-powered-by");
app.use(json());

app.use("/.well-known/prismic-webhooks/health", healthRouter);
app.use("/webhooks/prismic", prismicRouter);
