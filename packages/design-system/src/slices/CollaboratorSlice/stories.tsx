import collaboratorSliceFactory from "@bashkim-com/prismic-factories/collaboratorSliceFactory";
import type { Meta } from "@storybook/nextjs";

import CollaboratorSlice from ".";

export default {
  component: CollaboratorSlice,
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

export const Fixture = {};
