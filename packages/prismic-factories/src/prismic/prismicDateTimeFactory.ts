import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

type PrismicDateTimeTransientParams = {
  days: number;
};

const defaultPrismicDateTimeTransientParams: PrismicDateTimeTransientParams = {
  days: 5,
};

const prismicDateTimeFactory = Factory.define<
  string,
  PrismicDateTimeTransientParams
>(({ transientParams = defaultPrismicDateTimeTransientParams }) => {
  return faker.date.recent({ days: transientParams.days }).toISOString();
});

export default prismicDateTimeFactory;
