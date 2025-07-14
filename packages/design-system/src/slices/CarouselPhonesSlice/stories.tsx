import carouselPhonesSliceFactory from "@bashkim-com/prismic-factories/carouselPhonesSliceFactory";
import type { Meta, StoryObj } from "@storybook/nextjs";

import CarouselPhonesSlice from ".";

const meta = {
  component: CarouselPhonesSlice,
  title: "Prismic slices/Carousel Phones Slice",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} satisfies Meta<typeof CarouselPhonesSlice>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slice: carouselPhonesSliceFactory.build(),
  },
} satisfies Story;

export default meta;
