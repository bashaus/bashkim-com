import { NewspaperSliceFixture } from "@bashkim-com/prismic";

import { NewspaperSlice, NewspaperSliceProps } from ".";

export default {
  component: NewspaperSlice,
  title: "Prismic slices/NewspaperSlice",
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

const Template = ({ ...args }: NewspaperSliceProps) => (
  <NewspaperSlice {...args} />
);

export const PrismicFixture = Template.bind({});
PrismicFixture.args = {
  slice: NewspaperSliceFixture,
};
