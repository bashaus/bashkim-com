import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import { z } from "zod";

export const prismicDateTransientParamsSchema = z.object({
  days: z.int().default(5),
});

export type PrismicDateTransientParams = z.infer<
  typeof prismicDateTransientParamsSchema
>;

export const prismicDateFactory = Factory.define<
  string,
  PrismicDateTransientParams
>(({ transientParams }) => {
  const $transientParams =
    prismicDateTransientParamsSchema.parse(transientParams);

  return faker.date
    .recent({ days: $transientParams.days })
    .toISOString()
    .substring(0, 10);
});
