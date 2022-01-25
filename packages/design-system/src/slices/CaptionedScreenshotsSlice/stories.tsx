import { CaptionedScreenshotsSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { CaptionedScreenshotsSlice, CaptionedScreenshotsSliceProps } from ".";

export default {
  component: CaptionedScreenshotsSlice,
  title: "Prismic slices/CaptionedScreenshotsSlice",
  args: {
    slice: CaptionedScreenshotsSliceFixture,
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

const Template: Story<CaptionedScreenshotsSliceProps> = (
  args: CaptionedScreenshotsSliceProps
) => <CaptionedScreenshotsSlice {...args} />;

export const PrismicFixture = Template.bind({});
