import express from "express";
import { app as prismic } from "./routes/prismic";

const app = express();
app.use(express.json());
app.use("/webhooks/prismic", prismic);

export default app;
