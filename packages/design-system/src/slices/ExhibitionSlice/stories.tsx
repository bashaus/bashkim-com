import { ExhibitionSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { ExhibitionSlice, ExhibitionSliceProps } from ".";

export default {
  component: ExhibitionSlice,
  title: "Prismic slices/ExhibitionSlice",
  args: {
    slice: ExhibitionSliceFixture,
  },
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    layout: "centered",
    controls: { expanded: false },
  },
} as Meta;

const Template: Story<ExhibitionSliceProps> = (args: ExhibitionSliceProps) => (
  <ExhibitionSlice {...args} />
);

export const PrismicFixture = Template.bind({});
