import { z } from "zod";

import { stackOverflowOwnerSchema } from "../owner/schema";
import { stackOverflowPostTypeSchema } from "../post-type/schema";
import { stackOverflowDateSchema } from "../date/schema";

export const stackOverflowPostSchema = z.object({
  owner: stackOverflowOwnerSchema,
  score: z.number(),
  last_edit_date: stackOverflowDateSchema.optional(),
  last_activity_date: stackOverflowDateSchema,
  creation_date: stackOverflowDateSchema,
  post_type: stackOverflowPostTypeSchema,
  post_id: z.number(),
  content_license: z.string(),
  title: z.string(),
  link: z.url(),
});

export type StackOverflowPost = z.infer<typeof stackOverflowPostSchema>;
