import type { Meta, StoryFn } from "@storybook/react";
import { placeholderImage } from "placeholder-image-data-url-svg";

import { SplitItemPartial } from "../SplitItemPartial";
import { SplitPartial as SplitPartialComponent, SplitPartialProps } from ".";

export default {
  component: SplitPartialComponent,
  title: "Partials/Split Partial",
  args: {
    backgroundImage: [
      placeholderImage({ width: 992, height: 558, text: "backgroundImage" }),
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

const Template: StoryFn<SplitPartialStoryProps> = ({
  backgroundImage,
  index = 0,
  ...args
}: SplitPartialStoryProps) => (
  <>
    <SplitPartialComponent index={index} {...args}>
      <SplitItemPartial>
        <div>SplitPartial</div>
      </SplitItemPartial>
      <SplitItemPartial backgroundImage={backgroundImage[0]} />
    </SplitPartialComponent>

    <SplitPartialComponent index={index + 1} {...args}>
      <SplitItemPartial>
        <div>SplitPartial (alternate)</div>
      </SplitItemPartial>
      <SplitItemPartial backgroundImage={backgroundImage[0]} />
    </SplitPartialComponent>
  </>
);

export const SplitPartial = {
  render: Template,
};
