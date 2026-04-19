import { z } from "zod";

import { stackOverflowPostSchema } from "../../models/post/schema";
import { stackOverflowResponseSchema } from "../../models/response/schema";

export const getStackOverflowPostsSchema = stackOverflowResponseSchema(
  stackOverflowPostSchema,
);

export type GetStackOverflowPosts = z.infer<typeof getStackOverflowPostsSchema>;
