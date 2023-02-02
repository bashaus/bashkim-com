import { NextFunction, Request, Response, Router } from "express";

import { triggerCircleCiPipeline } from "../libraries/circleci";
import { validatePrismicSecret } from "../libraries/prismic";
import { PrismicError } from "../libraries/prismic/errors";

export class UnhandledError extends Error {
  statusCode = 500;

  constructor() {
    super("Unhandled error occurred");
  }
}

export type PrismicRequestBody = {
  type: string;
  secret: string;
};

export type PrismicResponseBody = {
  ok: boolean;
};

export const router = Router();

router.post(
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
      if (err instanceof PrismicError) {
        console.error(err);
        next(err);
        return;
      }

      console.error("Unhandled error", err);
      next(new UnhandledError());
    }
  }
);
