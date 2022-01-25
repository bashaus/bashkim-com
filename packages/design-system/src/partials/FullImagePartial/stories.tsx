import { Meta, Story } from "@storybook/react";

import { FullImagePartial, FullImagePartialProps } from ".";

export default {
  component: FullImagePartial,
  title: "Partials/FullImagePartial",
  args: {
    figure: ["https://via.placeholder.com/1200x630?text=figure"],
  },
  argTypes: {
    figure: { control: "file" },
  },
} as Meta;

type FullImagePartialStoryProps = Omit<FullImagePartialProps, "figure"> & {
  figure: Array<string>;
};

const Template: Story<FullImagePartialStoryProps> = ({
  figure,
  ...args
}: FullImagePartialStoryProps) => (
  <FullImagePartial {...args}>
    <img alt="" src={figure[0]} />
  </FullImagePartial>
);

export const Render = Template.bind({});
