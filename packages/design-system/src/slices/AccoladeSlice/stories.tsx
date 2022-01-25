import { AccoladeSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { AccoladeSlice, AccoladeSliceProps } from ".";

export default {
  component: AccoladeSlice,
  title: "Prismic slices/AccoladeSlice",
  args: {
    slice: AccoladeSliceFixture,
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

const Template: Story<AccoladeSliceProps> = (args: AccoladeSliceProps) => (
  <AccoladeSlice {...args} />
);

export const PrismicFixture = Template.bind({});
