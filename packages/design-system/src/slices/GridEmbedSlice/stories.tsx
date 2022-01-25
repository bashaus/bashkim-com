import { GridEmbedSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { GridEmbedSlice, GridEmbedSliceProps } from ".";

export default {
  component: GridEmbedSlice,
  title: "Prismic slices/GridEmbedSlice",
  args: {
    slice: GridEmbedSliceFixture,
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

const Template: Story<GridEmbedSliceProps> = (args: GridEmbedSliceProps) => (
  <GridEmbedSlice {...args} />
);

export const PrismicFixture = Template.bind({});
