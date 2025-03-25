import collaboratorSliceFactory from "@bashkim-com/prismic-factories/collaboratorSliceFactory";
import type { Meta } from "@storybook/react";

import CollaboratorSliceComponent from ".";

export default {
  component: CollaboratorSliceComponent,
  title: "Prismic slices/Collaborator Slice",
  args: {
    slice: collaboratorSliceFactory.build(),
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

export const CollaboratorSlice = {};
