import { CarouselImagesSliceFixture } from "@bashkim-com/prismic";

import { CarouselImagesSlice, CarouselImagesSliceProps } from ".";

export default {
  component: CarouselImagesSlice,
  title: "Prismic slices/CarouselImagesSlice",
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

export const PrismicFixture = Template.bind({});
PrismicFixture.args = {
  slice: CarouselImagesSliceFixture,
};
