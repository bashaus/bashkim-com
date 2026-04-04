import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

type PrismicParagraph = {
  type: "paragraph";
  text: string;
  spans: [];
};

export const prismicParagraphFactory = Factory.define<PrismicParagraph>(() => {
  return {
    type: "paragraph",
    text: faker.lorem.sentence(),
    spans: [],
  };
});
