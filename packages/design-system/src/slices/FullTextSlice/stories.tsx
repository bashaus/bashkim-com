import { FullTextSliceFixture } from "@bashkim-com/prismic";

import { FullTextSlice, FullTextSliceProps } from ".";

export default {
  component: FullTextSlice,
  title: "Prismic slices/FullTextSlice",
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

const Template = ({ ...args }: FullTextSliceProps) => (
  <FullTextSlice {...args} />
);

export const PrismicFixture = Template.bind({});
PrismicFixture.args = {
  slice: FullTextSliceFixture,
};
