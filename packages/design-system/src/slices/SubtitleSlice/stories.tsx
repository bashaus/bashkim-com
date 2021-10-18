import { SubtitleSliceFixture } from "@bashkim-com/prismic";

import { SubtitleSlice, SubtitleSliceProps } from ".";

export default {
  component: SubtitleSlice,
  title: "Prismic slices/SubtitleSlice",
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

const Template = ({ ...args }: SubtitleSliceProps) => (
  <SubtitleSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: SubtitleSliceFixture,
};
