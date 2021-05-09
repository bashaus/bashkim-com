import { SubtitleSliceFixture } from "@bashkim-com/prismic";

import { SubtitleSlice, SubtitleSliceProps } from ".";

export default {
  component: SubtitleSlice,
  title: "Slices/Subtitle",
  argTypes: {
    slice: { control: "json" },
  },
};

const Template = ({ ...args }: SubtitleSliceProps) => (
  <SubtitleSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: SubtitleSliceFixture,
};
