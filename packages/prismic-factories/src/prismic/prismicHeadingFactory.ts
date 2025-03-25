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

const prismicHeadingFactory = Factory.define<PrismicHeading>((opts) => {
  const { type = "heading3", text = faker.lorem.words(3) } = opts.params;

  return {
    type,
    text,
    spans: [],
  };
});

export default prismicHeadingFactory;
