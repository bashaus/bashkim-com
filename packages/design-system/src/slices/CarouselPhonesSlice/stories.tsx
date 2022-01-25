import { CarouselPhonesSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { CarouselPhonesSlice, CarouselPhonesSliceProps } from ".";

export default {
  component: CarouselPhonesSlice,
  title: "Prismic slices/CarouselPhonesSlice",
  args: {
    slice: CarouselPhonesSliceFixture,
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

const Template: Story<CarouselPhonesSliceProps> = (
  args: CarouselPhonesSliceProps
) => <CarouselPhonesSlice {...args} />;

export const PrismicFixture = Template.bind({});
