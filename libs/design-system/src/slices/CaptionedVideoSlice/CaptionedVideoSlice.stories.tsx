import { CaptionedVideoSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta, Story } from "@storybook/react";

import {
  CaptionedVideoSlice as CaptionedVideoSliceComponent,
  CaptionedVideoSliceProps,
} from "./CaptionedVideoSlice";

export default {
  component: CaptionedVideoSliceComponent,
  title: "Prismic slices/Captioned Video Slice",
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
) => <CaptionedVideoSliceComponent {...args} />;

export const CaptionedVideoSlice = Template.bind({});
