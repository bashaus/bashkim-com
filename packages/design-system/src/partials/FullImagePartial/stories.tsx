import type { Meta, StoryObj } from "@storybook/nextjs";
import { placeholderImage } from "placeholder-image-data-url-svg";

import FullImagePartial, { FullImagePartialProps } from ".";

type FullImagePartialRendererProps = Readonly<
  Omit<FullImagePartialProps, "figure"> & {
    figure: Array<string>;
  }
>;

const FullImagePartialRenderer = ({
  figure,
  ...args
}: FullImagePartialRendererProps) => (
  <FullImagePartial {...args}>
    <img alt="" src={figure[0]} />
  </FullImagePartial>
);

const meta = {
  component: FullImagePartial,
  title: "Partials/Full Image Partial",
  argTypes: {
    figure: { control: "file" },
  },
  render: FullImagePartialRenderer,
} satisfies Meta<FullImagePartialRendererProps>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    figure: [placeholderImage({ width: 1200, height: 630, text: "figure" })],
  },
} satisfies Story;

export default meta;
