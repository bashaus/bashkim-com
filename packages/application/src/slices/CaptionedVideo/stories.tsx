import { CaptionedVideoSliceFixture } from "@bashkim-com/prismic";

import { CaptionedVideoSlice, CaptionedVideoSliceProps } from ".";

export default {
  component: CaptionedVideoSlice,
  title: "Prismic/Slices/CaptionedVideo",
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

const Template = ({ ...args }: CaptionedVideoSliceProps) => (
  <CaptionedVideoSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: CaptionedVideoSliceFixture,
};
