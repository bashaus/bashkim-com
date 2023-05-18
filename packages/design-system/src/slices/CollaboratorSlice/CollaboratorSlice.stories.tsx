import { CollaboratorSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta } from "@storybook/react";

import { CollaboratorSlice as CollaboratorSliceComponent } from "./CollaboratorSlice";

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

export const CollaboratorSlice = {};
