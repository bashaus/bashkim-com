import { AccoladeSliceFixture } from "@bashkim-com/prismic";

import { AccoladeSlice, AccoladeSliceProps } from ".";

export default {
  component: AccoladeSlice,
  title: "Prismic slices/AccoladeSlice",
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

const Template = ({ ...args }: AccoladeSliceProps) => (
  <AccoladeSlice {...args} />
);

export const PrismicFixture = Template.bind({});
PrismicFixture.args = {
  slice: AccoladeSliceFixture,
};
