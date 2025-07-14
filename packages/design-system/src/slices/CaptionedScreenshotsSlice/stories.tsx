import captionedScreenshotsSliceFactory from "@bashkim-com/prismic-factories/captionedScreenshotsSliceFactory";
import type { Meta, StoryObj } from "@storybook/nextjs";

import CaptionedScreenshotsSlice from ".";

const meta = {
  component: CaptionedScreenshotsSlice,
  title: "Prismic slices/Captioned Screenshots Slice",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} satisfies Meta<typeof CaptionedScreenshotsSlice>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slice: captionedScreenshotsSliceFactory.build(),
  },
} satisfies Story;

export default meta;
