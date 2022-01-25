import { Meta, Story } from "@storybook/react";

import { SplitItemPartial } from "../SplitItemPartial";
import { SplitPartial, SplitPartialProps } from ".";

export default {
  component: SplitPartial,
  title: "Partials/SplitPartial",
  args: {
    backgroundImage: [
      "https://via.placeholder.com/992x558?text=Background+image",
    ],
  },
  argTypes: {
    backgroundImage: {
      control: "file",
      table: { category: "Story helpers" },
    },
  },
} as Meta;

type SplitPartialStoryProps = Omit<SplitPartialProps, "backgroundImage"> & {
  backgroundImage: Array<string>;
};

const Template: Story<SplitPartialStoryProps> = ({
  backgroundImage,
  index = 0,
  ...args
}: SplitPartialStoryProps) => (
  <>
    <SplitPartial index={index} {...args}>
      <SplitItemPartial>
        <div>SplitPartial</div>
      </SplitItemPartial>
      <SplitItemPartial backgroundImage={backgroundImage[0]} />
    </SplitPartial>

    <SplitPartial index={index + 1} {...args}>
      <SplitItemPartial>
        <div>SplitPartial (alternate)</div>
      </SplitItemPartial>
      <SplitItemPartial backgroundImage={backgroundImage[0]} />
    </SplitPartial>
  </>
);

export const Render = Template.bind({});
