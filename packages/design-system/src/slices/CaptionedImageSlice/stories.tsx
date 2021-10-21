import { CaptionedImageSliceFixture } from "@bashkim-com/prismic";

import { CaptionedImageSlice, CaptionedImageSliceProps } from ".";

export default {
  component: CaptionedImageSlice,
  title: "Prismic slices/CaptionedImageSlice",
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

const Template = ({ ...args }: CaptionedImageSliceProps) => (
  <CaptionedImageSlice {...args} />
);

export const PrismicFixture = Template.bind({});
PrismicFixture.args = {
  slice: CaptionedImageSliceFixture,
};
