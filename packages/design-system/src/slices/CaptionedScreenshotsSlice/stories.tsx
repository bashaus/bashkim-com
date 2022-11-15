import { CaptionedScreenshotsSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta, Story } from "@storybook/react";

import {
  CaptionedScreenshotsSlice as CaptionedScreenshotsSliceComponent,
  CaptionedScreenshotsSliceProps,
} from ".";

export default {
  component: CaptionedScreenshotsSliceComponent,
  title: "Prismic slices/Captioned Screenshots Slice",
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
) => <CaptionedScreenshotsSliceComponent {...args} />;

export const CaptionedScreenshotsSlice = Template.bind({});
