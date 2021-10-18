import { CarouselPhonesSliceFixture } from "@bashkim-com/prismic";

import { CarouselPhonesSlice, CarouselPhonesSliceProps } from ".";

export default {
  component: CarouselPhonesSlice,
  title: "Prismic slices/CarouselPhonesSlice",
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

const Template = ({ ...args }: CarouselPhonesSliceProps) => (
  <CarouselPhonesSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: CarouselPhonesSliceFixture,
};
