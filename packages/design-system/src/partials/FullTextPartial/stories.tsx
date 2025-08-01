import { faker } from "@faker-js/faker";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/nextjs";

import FullTextPartial, { FullTextPartialProps } from ".";

type FullTextPartialRendererProps = Readonly<
  FullTextPartialProps & {
    title: string;
  }
>;

const FullTextPartialRenderer = ({
  title,
  ...args
}: FullTextPartialRendererProps) => (
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

const meta = {
  component: FullTextPartial,
  title: "Partials/Full Text Partial",
  argTypes: {
    title: {
      control: "text",
      table: { category: "Story helpers" },
    },
  },
  render: FullTextPartialRenderer,
} satisfies Meta<typeof FullTextPartialRenderer>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    title: "FullTextPartial",
  },
} satisfies Story;

export default meta;
