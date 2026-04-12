import { faker } from "@faker-js/faker";
import { RTParagraphNode } from "@prismicio/client";
import { Factory } from "fishery";

export const prismicParagraphFactory = Factory.define<RTParagraphNode>(() => {
  return {
    type: "paragraph",
    text: faker.lorem.paragraph(),
    spans: [],
  };
});
