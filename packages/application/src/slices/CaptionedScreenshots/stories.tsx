import { CaptionedScreenshotsSliceFixture } from "@bashkim-com/prismic";

import { CaptionedScreenshotsSlice, CaptionedScreenshotsSliceProps } from ".";

export default {
  component: CaptionedScreenshotsSlice,
  title: "Slices/CaptionedScreenshots",
  argTypes: {
    slice: { control: "json" },
  },
};

const Template = ({ ...args }: CaptionedScreenshotsSliceProps) => (
  <CaptionedScreenshotsSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: CaptionedScreenshotsSliceFixture,
};
