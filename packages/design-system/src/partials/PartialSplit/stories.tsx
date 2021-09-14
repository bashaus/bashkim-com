import React from "react";

import { PartialSplit, PartialSplitProps } from ".";

export default {
  component: PartialSplit,
  title: "Partials/Split",
  argTypes: {
    backgroundImage: {
      control: "file",
      table: { category: "Story helpers" },
    },
  },
};

type PartialSplitStoryProps = PartialSplitProps & {
  backgroundImage: Array<string>;
};

const Template = ({
  backgroundImage,
  index = 0,
  ...args
}: PartialSplitStoryProps) => (
  <>
    <PartialSplit {...args} index={index}>
      <PartialSplit.Item>
        <div>PartialSplit</div>
      </PartialSplit.Item>
      <PartialSplit.Item backgroundImage={backgroundImage[0]} />
    </PartialSplit>

    <PartialSplit {...args} index={index + 1}>
      <PartialSplit.Item>
        <div>PartialSplit (alternate)</div>
      </PartialSplit.Item>
      <PartialSplit.Item backgroundImage={backgroundImage[0]} />
    </PartialSplit>
  </>
);

export const Render = Template.bind({});
Render.args = {
  backgroundImage: [
    "https://via.placeholder.com/992x558?text=Background+image",
  ],
};
