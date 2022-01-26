import type { Meta, Story } from "@storybook/react";
import faker from "faker";

import {
  SubtitlePartial as SubtitlePartialComponent,
  SubtitlePartialProps,
} from ".";

export default {
  components: SubtitlePartialComponent,
  title: "Partials/Subtitle Partial",
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
  <SubtitlePartialComponent {...args}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </SubtitlePartialComponent>
);

export const SubtitlePartial = Template.bind({});
