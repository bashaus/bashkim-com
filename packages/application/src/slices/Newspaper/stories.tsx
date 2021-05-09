import { NewspaperSliceFixture } from "@bashkim-com/prismic";

import { NewspaperSlice, NewspaperSliceProps } from ".";

export default {
  component: NewspaperSlice,
  title: "Slices/Newspaper",
  argTypes: {
    slice: { control: "json" },
  },
};

const Template = ({ ...args }: NewspaperSliceProps) => (
  <NewspaperSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: NewspaperSliceFixture,
};
