import { GridVideoSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta, Story } from "@storybook/react";

import {
  GridVideoSlice as GridVideoSliceComponent,
  GridVideoSliceProps,
} from "./GridVideoSlice";

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
