import { z } from "zod";

import { stackOverflowDateSchema } from "../date/schema";

export const stackOverflowBadgeCountsSchema = z.object({
  bronze: z.int(),
  silver: z.int(),
  gold: z.int(),
});

export const stackOverflowUserSchema = z.object({
  badge_counts: stackOverflowBadgeCountsSchema,
  account_id: z.int(),
  is_employee: z.boolean(),
  last_modified_date: stackOverflowDateSchema,
  last_access_date: stackOverflowDateSchema,
  reputation_change_year: z.int(),
  reputation_change_quarter: z.int(),
  reputation_change_month: z.int(),
  reputation_change_week: z.int(),
  reputation_change_day: z.int(),
  reputation: z.int(),
  creation_date: stackOverflowDateSchema,
  user_type: z.string(),
  user_id: z.int(),
  accept_rate: z.int(),
  location: z.string(),
  website_url: z.url(),
  link: z.url(),
  profile_image: z.url(),
  display_name: z.string(),
});

export type StackOverflowUser = z.infer<typeof stackOverflowUserSchema>;
