import type { Meta, StoryFn } from "@storybook/react";
import { placeholderImage } from "placeholder-image-data-url-svg";

import FullImagePartialComponent, { FullImagePartialProps } from ".";

export default {
  component: FullImagePartialComponent,
  title: "Partials/Full Image Partial",
  args: {
    figure: [placeholderImage({ width: 1200, height: 630, text: "figure" })],
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
