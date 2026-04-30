import { z } from "zod";

export const stackOverflowOwnerSchema = z.object({
  account_id: z.number(),
  reputation: z.number(),
  user_id: z.number(),
  user_type: z.string(),
  accept_rate: z.number(),
  profile_image: z.httpUrl(),
  display_name: z.string(),
  link: z.httpUrl(),
});

export type StackOverflowOwner = z.infer<typeof stackOverflowOwnerSchema>;
