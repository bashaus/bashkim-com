import { Router } from "express";
import { Response } from "ts-json-api";

export const router = Router();

router.get("/health", async (_req, res) => {
  const response: Response = {
    jsonapi: {
      version: "1.1",
    },
  };

  res.status(200);
  res.json(response);
});
