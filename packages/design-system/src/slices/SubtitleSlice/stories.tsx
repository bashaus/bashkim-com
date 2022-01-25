import { SubtitleSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { SubtitleSlice as SubtitleSliceComponent, SubtitleSliceProps } from ".";

export default {
  component: SubtitleSliceComponent,
  title: "Prismic slices/Subtitle Slice",
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
  <SubtitleSliceComponent {...args} />
);

export const SubtitleSlice = Template.bind({});
