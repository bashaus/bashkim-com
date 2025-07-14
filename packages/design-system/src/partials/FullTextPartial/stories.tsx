import { faker } from "@faker-js/faker";
import Typography from "@mui/material/Typography";
import type { Meta, StoryFn } from "@storybook/nextjs";

import FullTextPartial, { FullTextPartialProps } from ".";

export default {
  component: FullTextPartial,
  title: "Partials/Full Text Partial",
  args: {
    title: "FullTextPartial",
  },
  argTypes: {
    title: {
      control: "text",
      table: { category: "Story helpers" },
    },
  },
} as Meta;

type FullTextPartialStoryProps = Readonly<
  FullTextPartialProps & {
    title: string;
  }
>;

const Template: StoryFn<FullTextPartialStoryProps> = ({
  title,
  ...args
}: FullTextPartialStoryProps) => (
  <FullTextPartial {...args}>
    <Typography variant="h6" component="h3" gutterBottom>
      {title}
    </Typography>

    {Array(6)
      .fill("")
      .map((_value, i) => i + 1)
      .map((value) => (
        <Typography key={value}>{faker.lorem.paragraph()}</Typography>
      ))}
  </FullTextPartial>
);

export const Fixture = {
  render: Template,
};
