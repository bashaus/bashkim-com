import { CaptionedVideoSliceFixture } from "@bashkim-com/prismic";

import { CaptionedVideoSlice, CaptionedVideoSliceProps } from ".";

export default {
  component: CaptionedVideoSlice,
  title: "Prismic slices/CaptionedVideoSlice",
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

export const PrismicFixture = Template.bind({});
PrismicFixture.args = {
  slice: CaptionedVideoSliceFixture,
};
