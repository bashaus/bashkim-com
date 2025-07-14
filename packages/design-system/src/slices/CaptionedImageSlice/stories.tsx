import captionedImageSliceFactory from "@bashkim-com/prismic-factories/captionedImageSliceFactory";
import type { Meta, StoryObj } from "@storybook/nextjs";

import CaptionedImageSlice from ".";

const meta = {
  component: CaptionedImageSlice,
  title: "Prismic slices/Captioned Image Slice",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} satisfies Meta<typeof CaptionedImageSlice>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slice: captionedImageSliceFactory.build(),
  },
} satisfies Story;

export default meta;
