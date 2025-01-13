import type { Meta, StoryFn } from "@storybook/react";
import { placeholderImage } from "placeholder-image-data-url-svg";

import TitlePartialComponent, { TitlePartialProps } from ".";

export default {
  component: TitlePartialComponent,
  title: "Partials/Title Partial",
  args: {
    image: [placeholderImage({ width: 300, height: 300, text: "image" })],
    title: "TitlePartial",
    subtitle: "Nulla venenatis lobortis dignissim. Nullam sit amet nisi.",
  },
  argTypes: {
    image: { control: "file" },
    title: {
      control: "text",
      table: { category: "Story helpers" },
    },
    subtitle: {
      control: "text",
      table: { category: "Story helpers" },
    },
  },
} as Meta;

type TitlePartialStoryProps = Omit<TitlePartialProps, "image"> & {
  image: Array<string>;
  title: string;
  subtitle: string;
};

const Template: StoryFn<TitlePartialStoryProps> = ({
  image,
  title,
  subtitle,
  ...args
}: TitlePartialStoryProps) => (
  <TitlePartialComponent image={image[0]} {...args}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </TitlePartialComponent>
);

export const TitlePartial = {
  render: Template,
};
