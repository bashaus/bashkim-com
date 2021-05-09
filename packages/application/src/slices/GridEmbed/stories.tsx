import { GridEmbedSliceFixture } from "@bashkim-com/prismic";

import { GridEmbedSlice, GridEmbedSliceProps } from ".";

export default {
  component: GridEmbedSlice,
  title: "Prismic/Slices/GridEmbed",
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

const Template = ({ ...args }: GridEmbedSliceProps) => (
  <GridEmbedSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: GridEmbedSliceFixture,
};
