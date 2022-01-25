import { CarouselImagesSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { CarouselImagesSlice, CarouselImagesSliceProps } from ".";

export default {
  component: CarouselImagesSlice,
  title: "Prismic slices/CarouselImagesSlice",
  args: {
    slice: CarouselImagesSliceFixture,
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

const Template: Story<CarouselImagesSliceProps> = (
  args: CarouselImagesSliceProps
) => <CarouselImagesSlice {...args} />;

export const PrismicFixture = Template.bind({});
