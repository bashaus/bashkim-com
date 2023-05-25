import { Router } from "express";
import { Response } from "ts-json-api";

export const router = Router();

router.get("/health", (_req, res) => {
  (async () => {
    const response: Response = {
      jsonapi: {
        version: "1.1",
      },
    };

    res.status(200);
    res.json(response);
  })();
});
