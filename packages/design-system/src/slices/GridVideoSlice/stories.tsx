import { GridVideoSliceFixture } from "@bashkim-com/prismic";

import { GridVideoSlice, GridVideoSliceProps } from ".";

export default {
  component: GridVideoSlice,
  title: "Prismic slices/GridVideoSlice",
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

export const PrismicFixture = Template.bind({});
PrismicFixture.args = {
  slice: GridVideoSliceFixture,
};
