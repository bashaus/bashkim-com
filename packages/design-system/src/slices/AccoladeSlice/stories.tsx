import { AccoladeSliceFixture } from "@bashkim-com/prismic";
import type { Meta, Story } from "@storybook/react";

import { AccoladeSlice as AccoladeSliceComponent, AccoladeSliceProps } from ".";

export default {
  component: AccoladeSliceComponent,
  title: "Prismic slices/Accolade Slice",
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
  <AccoladeSliceComponent {...args} />
);

export const AccoladeSlice = Template.bind({});
