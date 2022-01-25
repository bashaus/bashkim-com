import { CaptionedImageSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { CaptionedImageSlice, CaptionedImageSliceProps } from ".";

export default {
  component: CaptionedImageSlice,
  title: "Prismic slices/CaptionedImageSlice",
  args: {
    slice: CaptionedImageSliceFixture,
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

const Template: Story<CaptionedImageSliceProps> = (
  args: CaptionedImageSliceProps
) => <CaptionedImageSlice {...args} />;

export const PrismicFixture = Template.bind({});
