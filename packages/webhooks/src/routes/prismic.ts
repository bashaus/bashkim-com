import express, { NextFunction, Request, Response } from "express";

import { triggerCircleCiPipeline } from "../libraries/circleci";
import { validatePrismicSecret } from "../libraries/prismic";

export type PrismicRequestBody = {
  type: string;
  secret: string;
};

export type PrismicResponseBody = {
  ok: boolean;
};

export const app = express();
app.disable("x-powered-by");

app.post(
  "/",
  async (
    req: Request<unknown, PrismicResponseBody, PrismicRequestBody>,
    res: Response<PrismicResponseBody>,
    next: NextFunction
  ) => {
    const { type, secret } = req.body;

    try {
      validatePrismicSecret(secret);

      if (type === "api-update") {
        await triggerCircleCiPipeline();
      }

      res.send({ ok: true });
    } catch (err) {
      next(err);
    }
  }
);
