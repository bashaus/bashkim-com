import { FullTextSliceFixture } from "@bashkim-com/prismic";

import { FullTextSlice, FullTextSliceProps } from ".";

export default {
  component: FullTextSlice,
  title: "Slices/FullText",
  argTypes: {
    slice: { control: "json" },
  },
};

const Template = ({ ...args }: FullTextSliceProps) => (
  <FullTextSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: FullTextSliceFixture,
};
