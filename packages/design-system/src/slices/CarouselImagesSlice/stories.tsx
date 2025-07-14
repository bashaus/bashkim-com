import carouselImagesSliceFactory from "@bashkim-com/prismic-factories/carouselImagesSliceFactory";
import type { Meta, StoryObj } from "@storybook/nextjs";

import CarouselImagesSlice from ".";

const meta = {
  component: CarouselImagesSlice,
  title: "Prismic slices/Carousel Images Slice",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} satisfies Meta<typeof CarouselImagesSlice>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slice: carouselImagesSliceFactory.build(),
  },
} satisfies Story;

export default meta;
