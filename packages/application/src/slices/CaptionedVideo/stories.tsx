import { CaptionedVideoSliceFixture } from "@bashkim-com/prismic";

import { CaptionedVideoSlice, CaptionedVideoSliceProps } from ".";

export default {
  component: CaptionedVideoSlice,
  title: "Slices/CaptionedVideo",
  argTypes: {
    slice: { control: "json" },
  },
};

const Template = ({ ...args }: CaptionedVideoSliceProps) => (
  <CaptionedVideoSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: CaptionedVideoSliceFixture,
};
