import { GridVideoSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import {
  GridVideoSlice as GridVideoSliceComponent,
  GridVideoSliceProps,
} from ".";

export default {
  component: GridVideoSliceComponent,
  title: "Prismic slices/Grid Video Slice",
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
  <GridVideoSliceComponent {...args} />
);

export const GridVideoSlice = Template.bind({});
