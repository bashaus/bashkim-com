import { CaptionedMagazineSliceFixture } from "@bashkim-com/prismic";

import { CaptionedMagazineSlice, CaptionedMagazineSliceProps } from ".";

export default {
  component: CaptionedMagazineSlice,
  title: "Prismic/Slices/CaptionedMagazine",
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

const Template = ({ ...args }: CaptionedMagazineSliceProps) => (
  <CaptionedMagazineSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: CaptionedMagazineSliceFixture,
};
