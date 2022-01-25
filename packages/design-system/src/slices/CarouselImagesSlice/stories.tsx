import { CarouselImagesSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import {
  CarouselImagesSlice as CarouselImagesSliceComponent,
  CarouselImagesSliceProps,
} from ".";

export default {
  component: CarouselImagesSliceComponent,
  title: "Prismic slices/Carousel Images Slice",
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
) => <CarouselImagesSliceComponent {...args} />;

export const CarouselImagesSlice = Template.bind({});
