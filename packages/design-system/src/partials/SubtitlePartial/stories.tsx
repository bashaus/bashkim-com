import { Meta, Story } from "@storybook/react";
import faker from "faker";

import { SubtitlePartial, SubtitlePartialProps } from ".";

export default {
  components: SubtitlePartial,
  title: "Partials/SubtitlePartial",
  args: {
    title: "SubtitlePartial",
    subtitle: faker.lorem.sentence(8),
  },
  argTypes: {
    title: {
      control: "text",
      table: { category: "Story helpers" },
    },
    subtitle: {
      control: "text",
      table: { category: "Story helpers" },
    },
  },
} as Meta;

type SubtitlePartialStoryProps = SubtitlePartialProps & {
  title: string;
  subtitle: string;
};

const Template: Story<SubtitlePartialStoryProps> = ({
  title,
  subtitle,
  ...args
}: SubtitlePartialStoryProps) => (
  <SubtitlePartial {...args}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </SubtitlePartial>
);

export const Render = Template.bind({});
