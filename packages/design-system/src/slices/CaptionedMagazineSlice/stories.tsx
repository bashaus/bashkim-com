import captionedMagazineSliceFactory from "@bashkim-com/prismic-factories/captionedMagazineSliceFactory";
import type { Meta, StoryObj } from "@storybook/nextjs";

import CaptionedMagazineSlice from ".";

const meta = {
  component: CaptionedMagazineSlice,
  title: "Prismic slices/Captioned Magazine Slice",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} satisfies Meta<typeof CaptionedMagazineSlice>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slice: captionedMagazineSliceFactory.build(),
  },
} satisfies Story;

export default meta;
