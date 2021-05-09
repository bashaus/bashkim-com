import { CarouselImagesSliceFixture } from "@bashkim-com/prismic";

import { CarouselImagesSlice, CarouselImagesSliceProps } from ".";

export default {
  component: CarouselImagesSlice,
  title: "Prismic/Slices/CarouselImages",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
};

const Template = ({ ...args }: CarouselImagesSliceProps) => (
  <CarouselImagesSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: CarouselImagesSliceFixture,
};
