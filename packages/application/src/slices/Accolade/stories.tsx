import { AccoladeSliceFixture } from "@bashkim-com/prismic";

import { AccoladeSlice, AccoladeSliceProps } from ".";

export default {
  component: AccoladeSlice,
  title: "Slices/Accolade",
  argTypes: {
    slice: { control: "json" },
  },
};

const Template = ({ ...args }: AccoladeSliceProps) => (
  <AccoladeSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: AccoladeSliceFixture,
};
