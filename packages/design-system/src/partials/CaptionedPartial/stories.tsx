import type { Meta, StoryFn } from "@storybook/nextjs";
import { placeholderImage } from "placeholder-image-data-url-svg";

import RichTextFormatter from "../../formatters/RichTextFormatter";
import CaptionedPartial, { CaptionedPartialProps } from ".";

export default {
  component: CaptionedPartial,
  title: "Partials/Captioned Partial",
  args: {
    figure: [placeholderImage({ width: 1200, height: 630, text: "figure" })],
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

type CaptionedPartialStoryProps = Readonly<
  Omit<CaptionedPartialProps, "figure"> & {
    figure: Array<string>;
    title: string;
    subtitle: string;
  }
>;

const Template: StoryFn<CaptionedPartialStoryProps> = ({
  title,
  subtitle,
  figure,
  ...args
}: CaptionedPartialStoryProps) => (
  <CaptionedPartial figure={<img src={figure[0]} alt="" />} {...args}>
    <RichTextFormatter>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </RichTextFormatter>
  </CaptionedPartial>
);

export const Fixture = {
  render: Template,
};
