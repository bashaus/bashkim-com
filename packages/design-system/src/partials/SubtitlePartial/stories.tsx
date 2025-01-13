import type { Meta, StoryFn } from "@storybook/react";

import SubtitlePartialComponent, { SubtitlePartialProps } from ".";

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

const Template: StoryFn<SubtitlePartialStoryProps> = ({
  title,
  subtitle,
  ...args
}: SubtitlePartialStoryProps) => (
  <SubtitlePartialComponent {...args}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </SubtitlePartialComponent>
);

export const SubtitlePartial = {
  render: Template,
};
