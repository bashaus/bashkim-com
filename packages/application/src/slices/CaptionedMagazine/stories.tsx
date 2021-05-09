import { CaptionedMagazineSliceFixture } from "@bashkim-com/prismic";

import { CaptionedMagazineSlice, CaptionedMagazineSliceProps } from ".";

export default {
  component: CaptionedMagazineSlice,
  title: "Slices/CaptionedMagazine",
  argTypes: {
    slice: { control: "json" },
  },
};

const Template = ({ ...args }: CaptionedMagazineSliceProps) => (
  <CaptionedMagazineSlice {...args} />
);

export const Render = Template.bind({});
Render.args = {
  slice: CaptionedMagazineSliceFixture,
};
