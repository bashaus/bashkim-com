import { z } from "zod";

import {
  stackOverflowDate,
  stackOverflowResponseSchema,
} from "../response/schema";

const stackOverflowOwnerSchema = z.object({
  account_id: z.number(),
  reputation: z.number(),
  user_id: z.number(),
  user_type: z.string(),
  accept_rate: z.number(),
  profile_image: z.url(),
  display_name: z.string(),
  link: z.url(),
});

const stackOverflowPostTypeSchema = z.enum(["question", "answer"]);

const stackOverflowPostSchema = z.object({
  owner: stackOverflowOwnerSchema,
  score: z.number(),
  last_edit_date: stackOverflowDate.optional(),
  last_activity_date: stackOverflowDate,
  creation_date: stackOverflowDate,
  post_type: stackOverflowPostTypeSchema,
  post_id: z.number(),
  content_license: z.string(),
  title: z.string(),
  link: z.url(),
});

export const getStackOverflowPostsSchema = stackOverflowResponseSchema(
  stackOverflowPostSchema,
);

export type GetStackOverflowPostsResponse = z.infer<
  typeof getStackOverflowPostsSchema
>;
