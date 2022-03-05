import express from "express";

import { app as prismic } from "./routes/prismic";

export const app = express();
app.disable("x-powered-by");

app.use(express.json());
app.use("/webhooks/prismic", prismic);
