import { CarouselImagesSliceFixture } from "@bashkim-com/prismic";

import { CarouselImagesSlice, CarouselImagesSliceProps } from ".";

export default {
  component: CarouselImagesSlice,
  title: "Slices/CarouselImages",
  argTypes: {
    slice: { control: "json" },
  },
};

const Template = ({ ...args }: CarouselImagesSliceProps) => (
  <CarouselImagesSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: CarouselImagesSliceFixture,
};
