import { NewspaperSliceFixture } from "@bashkim-com/prismic";

import { NewspaperSlice, NewspaperSliceProps } from ".";

export default {
  component: NewspaperSlice,
  title: "Prismic/Slices/Newspaper",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
};

const Template = ({ ...args }: NewspaperSliceProps) => (
  <NewspaperSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: NewspaperSliceFixture,
};
