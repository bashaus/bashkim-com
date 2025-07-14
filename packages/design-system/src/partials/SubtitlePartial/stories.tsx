import Typography from "@mui/material/Typography";
import type { Meta, StoryFn } from "@storybook/nextjs";

import SubtitlePartial, { SubtitlePartialProps } from ".";

export default {
  components: SubtitlePartial,
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

type SubtitlePartialStoryProps = Readonly<
  SubtitlePartialProps & {
    title: string;
    subtitle: string;
  }
>;

const Template: StoryFn<SubtitlePartialStoryProps> = ({
  title,
  subtitle,
  ...args
}: SubtitlePartialStoryProps) => (
  <SubtitlePartial {...args}>
    <Typography variant="h4" component="h2" gutterBottom>
      {title}
    </Typography>
    <Typography>{subtitle}</Typography>
  </SubtitlePartial>
);

export const Fixture = {
  render: Template,
};
