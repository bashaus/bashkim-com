import { FullTextSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { FullTextSlice, FullTextSliceProps } from ".";

export default {
  component: FullTextSlice,
  title: "Prismic slices/FullTextSlice",
  args: {
    slice: FullTextSliceFixture,
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

const Template: Story<FullTextSliceProps> = (args: FullTextSliceProps) => (
  <FullTextSlice {...args} />
);

export const PrismicFixture = Template.bind({});
