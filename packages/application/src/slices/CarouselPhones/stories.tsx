import { CarouselPhonesSliceFixture } from "@bashkim-com/prismic";

import { CarouselPhonesSlice, CarouselPhonesSliceProps } from ".";

export default {
  component: CarouselPhonesSlice,
  title: "Slices/CarouselPhones",
  argTypes: {
    slice: { control: "json" },
  },
};

const Template = ({ ...args }: CarouselPhonesSliceProps) => (
  <CarouselPhonesSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: CarouselPhonesSliceFixture,
};
