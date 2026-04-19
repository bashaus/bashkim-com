import { z } from "zod";

export const stackOverflowDateSchema = z.union([
  z.coerce.date(),
  z.number().transform((val) => new Date(val * 1000)),
]);
