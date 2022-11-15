import { NewspaperSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta, Story } from "@storybook/react";

import {
  NewspaperSlice as NewspaperSliceComponent,
  NewspaperSliceProps,
} from ".";

export default {
  component: NewspaperSliceComponent,
  title: "Prismic slices/Newspaper Slice",
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
  <NewspaperSliceComponent {...args} />
);

export const NewspaperSlice = Template.bind({});
