import { CollaboratorSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta, Story } from "@storybook/react";

import {
  CollaboratorSlice as CollaboratorSliceComponent,
  CollaboratorSliceProps,
} from ".";

export default {
  component: CollaboratorSliceComponent,
  title: "Prismic slices/Collaborator Slice",
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
) => <CollaboratorSliceComponent {...args} />;

export const CollaboratorSlice = Template.bind({});
