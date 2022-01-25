import { GridVideoSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { GridVideoSlice, GridVideoSliceProps } from ".";

export default {
  component: GridVideoSlice,
  title: "Prismic slices/GridVideoSlice",
  args: {
    slice: GridVideoSliceFixture,
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

const Template: Story<GridVideoSliceProps> = (args: GridVideoSliceProps) => (
  <GridVideoSlice {...args} />
);

export const PrismicFixture = Template.bind({});
