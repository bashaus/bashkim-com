import { CaptionedMagazineSliceFixture } from "@bashkim-com/prismic";

import { CaptionedMagazineSlice, CaptionedMagazineSliceProps } from ".";

export default {
  component: CaptionedMagazineSlice,
  title: "Prismic slices/CaptionedMagazineSlice",
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

export const PrismicFixture = Template.bind({});
PrismicFixture.args = {
  slice: CaptionedMagazineSliceFixture,
};
