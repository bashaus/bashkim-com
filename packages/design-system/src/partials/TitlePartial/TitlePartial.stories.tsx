import type { Meta, StoryFn } from "@storybook/react";

import {
  TitlePartial as TitlePartialComponent,
  TitlePartialProps,
} from "./TitlePartial";

export default {
  component: TitlePartialComponent,
  title: "Partials/Title Partial",
  args: {
    image: ["https://via.placeholder.com/300x300.png?text=image"],
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
