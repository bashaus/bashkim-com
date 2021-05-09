import { GridEmbedSliceFixture } from "@bashkim-com/prismic";

import { GridEmbedSlice, GridEmbedSliceProps } from ".";

export default {
  component: GridEmbedSlice,
  title: "Slices/GridEmbed",
  argTypes: {
    slice: { control: "json" },
  },
};

const Template = ({ ...args }: GridEmbedSliceProps) => (
  <GridEmbedSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: GridEmbedSliceFixture,
};
