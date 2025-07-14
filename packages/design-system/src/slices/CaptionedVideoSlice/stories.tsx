import captionedVideoSliceFactory from "@bashkim-com/prismic-factories/captionedVideoSliceFactory";
import type { Meta, StoryObj } from "@storybook/nextjs";

import CaptionedVideoSlice from ".";

const meta = {
  component: CaptionedVideoSlice,
  title: "Prismic slices/Captioned Video Slice",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} satisfies Meta<typeof CaptionedVideoSlice>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slice: captionedVideoSliceFactory.build(),
  },
} satisfies Story;

export default meta;
