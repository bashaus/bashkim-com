import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

type PrismicDateTransientParams = {
  days: number;
};

const defaultPrismicDateTransientParams: PrismicDateTransientParams = {
  days: 5,
};

export const prismicDateFactory = Factory.define<
  string,
  PrismicDateTransientParams
>(({ transientParams = defaultPrismicDateTransientParams }) => {
  return faker.date
    .recent({ days: transientParams.days })
    .toISOString()
    .substring(0, 10);
});
