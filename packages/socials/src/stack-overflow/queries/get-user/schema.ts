import { z } from "zod";

import { stackOverflowResponseSchema } from "../../models/response/schema";
import { stackOverflowUserSchema } from "../../models/user/schema";

export const getStackOverflowUserSchema = stackOverflowResponseSchema(
  stackOverflowUserSchema,
);

export type GetStackOverflowUser = z.infer<typeof getStackOverflowUserSchema>;
