import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

type PrismicHeading = {
  type:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "heading6";
  text: string;
  spans: [];
};

export const prismicHeadingFactory = Factory.define<PrismicHeading>(() => {
  return {
    type: "heading3",
    text: faker.lorem.words(3),
    spans: [],
  };
});
