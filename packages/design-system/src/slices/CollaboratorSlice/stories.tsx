import collaboratorSliceFactory from "@bashkim-com/prismic-factories/collaboratorSliceFactory";
import type { Meta, StoryObj } from "@storybook/nextjs";

import CollaboratorSlice from ".";

const meta = {
  component: CollaboratorSlice,
  title: "Prismic slices/Collaborator Slice",
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
} satisfies Meta<typeof CollaboratorSlice>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slice: collaboratorSliceFactory.build(),
  },
} satisfies Story;

export default meta;
