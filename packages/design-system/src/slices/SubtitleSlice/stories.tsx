import { SubtitleSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { SubtitleSlice, SubtitleSliceProps } from ".";

export default {
  component: SubtitleSlice,
  title: "Prismic slices/SubtitleSlice",
  args: {
    slice: SubtitleSliceFixture,
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

const Template: Story<SubtitleSliceProps> = (args: SubtitleSliceProps) => (
  <SubtitleSlice {...args} />
);

export const PrismicFixture = Template.bind({});
