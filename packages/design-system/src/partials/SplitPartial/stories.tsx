import type { Meta, StoryObj } from "@storybook/nextjs";
import { placeholderImage } from "placeholder-image-data-url-svg";

import SplitItemPartial from "../SplitItemPartial";
import SplitPartial, { SplitPartialProps } from ".";

type SplitPartialRendererProps = Readonly<
  Omit<SplitPartialProps, "backgroundImage"> & {
    backgroundImage: Array<string>;
  }
>;

const SplitPartialRenderer = ({
  backgroundImage,
  index = 0,
  ...args
}: SplitPartialRendererProps) => (
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

const meta = {
  component: SplitPartial,
  title: "Partials/Split Partial",
  argTypes: {
    backgroundImage: { control: "file" },
  },
  render: SplitPartialRenderer,
} satisfies Meta<typeof SplitPartialRenderer>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    backgroundImage: [
      placeholderImage({ width: 992, height: 558, text: "backgroundImage" }),
    ],
  },
} satisfies Story;

export default meta;
