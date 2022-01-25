import { GridEmbedSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import {
  GridEmbedSlice as GridEmbedSliceComponent,
  GridEmbedSliceProps,
} from ".";

export default {
  component: GridEmbedSliceComponent,
  title: "Prismic slices/Grid Embed Slice",
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
  <GridEmbedSliceComponent {...args} />
);

export const GridEmbedSlice = Template.bind({});
