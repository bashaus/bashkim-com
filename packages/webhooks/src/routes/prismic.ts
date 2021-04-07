import express, { NextFunction, Request, Response } from "express";

import { triggerCircleCiPipeline } from "../libraries/circleci";
import { validatePrismicSecret } from "../libraries/prismic";

export type PrismicBody = {
  type: string;
  secret: string;
};

export const app = express();

app.post(
  "/",
  async (
    req: Request<unknown, unknown, PrismicBody>,
    res: Response,
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
