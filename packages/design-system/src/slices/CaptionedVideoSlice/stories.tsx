import { CaptionedVideoSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { CaptionedVideoSlice, CaptionedVideoSliceProps } from ".";

export default {
  component: CaptionedVideoSlice,
  title: "Prismic slices/CaptionedVideoSlice",
  args: {
    slice: CaptionedVideoSliceFixture,
  },
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} as Meta;

const Template: Story<CaptionedVideoSliceProps> = (
  args: CaptionedVideoSliceProps
) => <CaptionedVideoSlice {...args} />;

export const PrismicFixture = Template.bind({});
