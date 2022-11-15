import { CaptionedMagazineSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta, Story } from "@storybook/react";

import {
  CaptionedMagazineSlice as CaptionedMagazineSliceComponent,
  CaptionedMagazineSliceProps,
} from ".";

export default {
  component: CaptionedMagazineSliceComponent,
  title: "Prismic slices/Captioned Magazine Slice",
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
) => <CaptionedMagazineSliceComponent {...args} />;

export const CaptionedMagazineSlice = Template.bind({});
