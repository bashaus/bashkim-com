import type { Meta, StoryFn } from "@storybook/nextjs";
import { placeholderImage } from "placeholder-image-data-url-svg";

import SplitItemPartial from "../SplitItemPartial";
import SplitPartial, { SplitPartialProps } from ".";

export default {
  component: SplitPartial,
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

type SplitPartialStoryProps = Readonly<
  Omit<SplitPartialProps, "backgroundImage"> & {
    backgroundImage: Array<string>;
  }
>;

const Template: StoryFn<SplitPartialStoryProps> = ({
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

export const Fixture = {
  render: Template,
};
