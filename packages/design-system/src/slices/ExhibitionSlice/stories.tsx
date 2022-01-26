import { ExhibitionSliceFixture } from "@bashkim-com/prismic";
import type { Meta, Story } from "@storybook/react";

import {
  ExhibitionSlice as ExhibitionSliceComponent,
  ExhibitionSliceProps,
} from ".";

export default {
  component: ExhibitionSliceComponent,
  title: "Prismic slices/Exhibition Slice",
  args: {
    slice: ExhibitionSliceFixture,
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

const Template: Story<ExhibitionSliceProps> = (args: ExhibitionSliceProps) => (
  <ExhibitionSliceComponent {...args} />
);

export const ExhibitionSlice = Template.bind({});
