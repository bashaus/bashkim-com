import type { Meta, StoryFn } from "@storybook/react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter/RichTextFormatter";
import {
  CaptionedPartial as CaptionedPartialComponent,
  CaptionedPartialProps,
} from "./CaptionedPartial";

export default {
  component: CaptionedPartialComponent,
  title: "Partials/Captioned Partial",
  args: {
    figure: ["https://via.placeholder.com/1200x630.png?text=figure"],
    title: "CaptionedPartial",
    subtitle:
      "Donec rutrum blandit dignissim. Cras a arcu interdum, rhoncus tellus a, semper nunc. Pellentesque ut quam ut risus condimentum tincidunt a nec dolor. Praesent fermentum ultrices purus eget semper. Nunc.",
  },
  argTypes: {
    figure: { control: "file" },
    title: {
      control: "text",
      description: "Example of a title (within children)",
      table: { category: "Story helpers" },
    },
    subtitle: {
      control: "text",
      description: "Example of a subtitle (within children)",
      table: { category: "Story helpers" },
    },
  },
} as Meta;

type CaptionedPartialStoryProps = Omit<CaptionedPartialProps, "figure"> & {
  figure: Array<string>;
  title: string;
  subtitle: string;
};

const Template: StoryFn<CaptionedPartialStoryProps> = ({
  title,
  subtitle,
  figure,
  ...args
}: CaptionedPartialStoryProps) => (
  <CaptionedPartialComponent figure={<img src={figure[0]} alt="" />} {...args}>
    <RichTextFormatter>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </RichTextFormatter>
  </CaptionedPartialComponent>
);

export const CaptionedPartial = {
  render: Template,
};
