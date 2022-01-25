import { CollaboratorSliceFixture } from "@bashkim-com/prismic";
import { Meta, Story } from "@storybook/react";

import { CollaboratorSlice, CollaboratorSliceProps } from ".";

export default {
  component: CollaboratorSlice,
  title: "Prismic slices/CollaboratorSlice",
  args: {
    slice: CollaboratorSliceFixture,
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

const Template: Story<CollaboratorSliceProps> = (
  args: CollaboratorSliceProps
) => <CollaboratorSlice {...args} />;

export const PrismicFixture = Template.bind({});
