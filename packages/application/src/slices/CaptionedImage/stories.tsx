import { CaptionedImageSliceFixture } from "@bashkim-com/prismic";

import { CaptionedImageSlice, CaptionedImageSliceProps } from ".";

export default {
  component: CaptionedImageSlice,
  title: "Slices/CaptionedImage",
  argTypes: {
    slice: { control: "json" },
  },
};

const Template = ({ ...args }: CaptionedImageSliceProps) => (
  <CaptionedImageSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: CaptionedImageSliceFixture,
};
