import type { Meta, Story } from "@storybook/react";

import {
  SubtitlePartial as SubtitlePartialComponent,
  SubtitlePartialProps,
} from ".";

export default {
  components: SubtitlePartialComponent,
  title: "Partials/Subtitle Partial",
  args: {
    title: "SubtitlePartial",
    subtitle: "Praesent vestibulum porta ex, ut lacinia quam. Vivamus.",
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
