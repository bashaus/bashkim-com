import express, { json } from "express";

import { router as rootRouter } from "./routes/rootRouter";
import { router as wellKnownRouter } from "./routes/wellKnownRouter";

export const app = express();

app.disable("x-powered-by");
app.use(json());

app.use("/.well-known/prismic-webhooks", wellKnownRouter);
app.use("/api/v1/prismic-webhooks", rootRouter);
