import { CaptionedScreenshotsSliceFixture } from "@bashkim-com/prismic";

import { CaptionedScreenshotsSlice, CaptionedScreenshotsSliceProps } from ".";

export default {
  component: CaptionedScreenshotsSlice,
  title: "Prismic/Slices/CaptionedScreenshots",
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

const Template = ({ ...args }: CaptionedScreenshotsSliceProps) => (
  <CaptionedScreenshotsSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: CaptionedScreenshotsSliceFixture,
};
