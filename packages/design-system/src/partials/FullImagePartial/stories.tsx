import type { Meta, StoryFn } from "@storybook/react";
import { placeholderImage } from "placeholder-image-data-url-svg";

import FullImagePartial, { FullImagePartialProps } from ".";

export default {
  component: FullImagePartial,
  title: "Partials/Full Image Partial",
  args: {
    figure: [placeholderImage({ width: 1200, height: 630, text: "figure" })],
  },
  argTypes: {
    figure: { control: "file" },
  },
} as Meta;

type FullImagePartialStoryProps = Readonly<
  Omit<FullImagePartialProps, "figure"> & {
    figure: Array<string>;
  }
>;

const Template: StoryFn<FullImagePartialStoryProps> = ({
  figure,
  ...args
}: FullImagePartialStoryProps) => (
  <FullImagePartial {...args}>
    <img alt="" src={figure[0]} />
  </FullImagePartial>
);

export const Fixture = {
  render: Template,
};
