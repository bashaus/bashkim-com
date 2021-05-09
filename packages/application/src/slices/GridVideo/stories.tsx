import { GridVideoSliceFixture } from "@bashkim-com/prismic";

import { GridVideoSlice, GridVideoSliceProps } from ".";

export default {
  component: GridVideoSlice,
  title: "Slices/GridVideo",
  argTypes: {
    slice: { control: "json" },
  },
};

const Template = ({ ...args }: GridVideoSliceProps) => (
  <GridVideoSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: GridVideoSliceFixture,
};
