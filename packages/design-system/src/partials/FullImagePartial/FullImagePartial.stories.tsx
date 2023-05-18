import type { Meta, StoryFn } from "@storybook/react";

import {
  FullImagePartial as FullImagePartialComponent,
  FullImagePartialProps,
} from "./FullImagePartial";

export default {
  component: FullImagePartialComponent,
  title: "Partials/Full Image Partial",
  args: {
    figure: ["https://via.placeholder.com/1200x630.png?text=figure"],
  },
  argTypes: {
    figure: { control: "file" },
  },
} as Meta;

type FullImagePartialStoryProps = Omit<FullImagePartialProps, "figure"> & {
  figure: Array<string>;
};

const Template: StoryFn<FullImagePartialStoryProps> = ({
  figure,
  ...args
}: FullImagePartialStoryProps) => (
  <FullImagePartialComponent {...args}>
    <img alt="" src={figure[0]} />
  </FullImagePartialComponent>
);

export const FullImagePartial = {
  render: Template,
};
