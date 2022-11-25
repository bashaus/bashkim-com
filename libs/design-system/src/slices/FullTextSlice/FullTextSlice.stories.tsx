import { FullTextSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta, Story } from "@storybook/react";

import {
  FullTextSlice as FullTextSliceComponent,
  FullTextSliceProps,
} from "./FullTextSlice";

export default {
  component: FullTextSliceComponent,
  title: "Prismic slices/Full Text Slice",
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
  <FullTextSliceComponent {...args} />
);

export const FullTextSlice = Template.bind({});
