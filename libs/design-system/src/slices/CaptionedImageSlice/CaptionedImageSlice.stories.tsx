import { CaptionedImageSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta, Story } from "@storybook/react";

import {
  CaptionedImageSlice as CaptionedImageSliceComponent,
  CaptionedImageSliceProps,
} from "./CaptionedImageSlice";

export default {
  component: CaptionedImageSliceComponent,
  title: "Prismic slices/Captioned Image Slice",
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
) => <CaptionedImageSliceComponent {...args} />;

export const CaptionedImageSlice = Template.bind({});
