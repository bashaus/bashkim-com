import { CarouselPhonesSliceFixture } from "@bashkim-com/prismic";
import type { Meta, Story } from "@storybook/react";

import {
  CarouselPhonesSlice as CarouselPhonesSliceComponent,
  CarouselPhonesSliceProps,
} from ".";

export default {
  component: CarouselPhonesSliceComponent,
  title: "Prismic slices/Carousel Phones Slice",
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
) => <CarouselPhonesSliceComponent {...args} />;

export const CarouselPhonesSlice = Template.bind({});
