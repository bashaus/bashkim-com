import { GridVideoSliceFixture } from "@bashkim-com/prismic";

import { GridVideoSlice, GridVideoSliceProps } from ".";

export default {
  component: GridVideoSlice,
  title: "Prismic/Slices/GridVideo",
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

const Template = ({ ...args }: GridVideoSliceProps) => (
  <GridVideoSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: GridVideoSliceFixture,
};
