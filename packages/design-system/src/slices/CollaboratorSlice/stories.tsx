import { CollaboratorSliceFixture } from "@bashkim-com/prismic";

import { CollaboratorSlice, CollaboratorSliceProps } from ".";

export default {
  component: CollaboratorSlice,
  title: "Prismic slices/CollaboratorSlice",
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
};

const Template = ({ ...args }: CollaboratorSliceProps) => (
  <CollaboratorSlice {...args} />
);

export const PrismicFixture = Template.bind({});
PrismicFixture.args = {
  slice: CollaboratorSliceFixture,
};
