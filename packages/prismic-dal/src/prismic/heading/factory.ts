import { faker } from "@faker-js/faker";
import {
  RTHeading1Node,
  RTHeading2Node,
  RTHeading3Node,
  RTHeading4Node,
  RTHeading5Node,
  RTHeading6Node,
} from "@prismicio/client";
import { Factory } from "fishery";

export type RTHeadingNode =
  | RTHeading1Node
  | RTHeading2Node
  | RTHeading3Node
  | RTHeading4Node
  | RTHeading5Node
  | RTHeading6Node;

const prismicHeadingFactory = Factory.define<RTHeadingNode>(() => {
  return {
    type: "heading3",
    text: faker.lorem.words(3),
    spans: [],
  };
});

export const prismicHeading1Factory = prismicHeadingFactory.params({
  type: "heading1",
});

export const prismicHeading2Factory = prismicHeadingFactory.params({
  type: "heading2",
});

export const prismicHeading3Factory = prismicHeadingFactory.params({
  type: "heading3",
});

export const prismicHeading4Factory = prismicHeadingFactory.params({
  type: "heading4",
});

export const prismicHeading5Factory = prismicHeadingFactory.params({
  type: "heading5",
});

export const prismicHeading6Factory = prismicHeadingFactory.params({
  type: "heading6",
});
