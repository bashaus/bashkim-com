import { ExhibitionSliceFixture } from "@bashkim-com/prismic";

import { ExhibitionSlice, ExhibitionSliceProps } from ".";

export default {
  component: ExhibitionSlice,
  title: "Prismic slices/ExhibitionSlice",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    layout: "centered",
    controls: { expanded: false },
  },
};

const Template = ({ ...args }: ExhibitionSliceProps) => (
  <ExhibitionSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: ExhibitionSliceFixture,
};
