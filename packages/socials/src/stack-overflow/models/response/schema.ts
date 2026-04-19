import { z } from "zod";

export function stackOverflowResponseSchema<TItemSchema extends z.ZodType>(
  itemSchema: TItemSchema,
) {
  return z.object({
    items: z.array(itemSchema),
    has_more: z.boolean(),
    quota_max: z.int(),
    quota_remaining: z.int(),
  });
}

export type StackOverflowResponse<TItem extends z.ZodType> = z.infer<
  ReturnType<typeof stackOverflowResponseSchema<TItem>>
>;
