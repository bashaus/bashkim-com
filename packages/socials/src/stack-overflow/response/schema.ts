import { z } from "zod";

export const stackOverflowDate = z
  .number()
  .transform((val) => new Date(val * 1000));

export function stackOverflowResponseSchema<TItems extends z.ZodType>(
  items: TItems,
) {
  return z.object({
    items: z.array(items),
    has_more: z.boolean(),
    quota_max: z.int(),
    quota_remaining: z.int(),
  });
}

export type StackOverflowResponse<TItems extends z.ZodType> = z.infer<
  ReturnType<typeof stackOverflowResponseSchema<TItems>>
>;
