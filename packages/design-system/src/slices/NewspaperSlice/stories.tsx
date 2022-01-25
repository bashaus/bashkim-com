import { NewspaperSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { NewspaperSlice, NewspaperSliceProps } from ".";

export default {
  component: NewspaperSlice,
  title: "Prismic slices/NewspaperSlice",
  args: {
    slice: NewspaperSliceFixture,
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

const Template: Story<NewspaperSliceProps> = (args: NewspaperSliceProps) => (
  <NewspaperSlice {...args} />
);

export const PrismicFixture = Template.bind({});
