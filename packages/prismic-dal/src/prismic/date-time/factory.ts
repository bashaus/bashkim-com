import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import { z } from "zod";

export const prismicDateTimeTransientParamsSchema = z.object({
  days: z.int().default(5),
});

export type PrismicDateTimeTransientParams = z.infer<
  typeof prismicDateTimeTransientParamsSchema
>;

export const prismicDateTimeFactory = Factory.define<
  string,
  PrismicDateTimeTransientParams
>(({ transientParams }) => {
  const $transientParams =
    prismicDateTimeTransientParamsSchema.parse(transientParams);

  return faker.date.recent({ days: $transientParams.days }).toISOString();
});
