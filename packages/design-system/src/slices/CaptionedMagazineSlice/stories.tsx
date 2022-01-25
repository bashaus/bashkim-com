import { CaptionedMagazineSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { CaptionedMagazineSlice, CaptionedMagazineSliceProps } from ".";

export default {
  component: CaptionedMagazineSlice,
  title: "Prismic slices/CaptionedMagazineSlice",
  args: {
    slice: CaptionedMagazineSliceFixture,
  },
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} as Meta;

const Template: Story<CaptionedMagazineSliceProps> = (
  args: CaptionedMagazineSliceProps
) => <CaptionedMagazineSlice {...args} />;

export const PrismicFixture = Template.bind({});
