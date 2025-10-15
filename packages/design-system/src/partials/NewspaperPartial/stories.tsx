import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/nextjs";

import NewspaperPartial, { NewspaperPartialProps } from ".";

type NewspaperPartialRendererProps = Readonly<
  NewspaperPartialProps & {
    paragraphs: number;
  }
>;

const NewspaperPartialRenderer = ({
  paragraphs,
  ...args
}: NewspaperPartialRendererProps) => (
  <NewspaperPartial {...args}>
    {new Array(paragraphs)
      .fill("")
      .map((_value, i) => i + 1)
      .map((value) => (
        <div key={value}>
          Paragraph {value}: {faker.lorem.paragraph(2)}
        </div>
      ))}
  </NewspaperPartial>
);

const meta = {
  component: NewspaperPartial,
  title: "Partials/Newspaper Partial",
  argTypes: {
    paragraphs: {
      control: "number",
      min: 1,
      max: 100,
      table: { category: "Story helpers" },
    },
  },
  render: NewspaperPartialRenderer,
} satisfies Meta<typeof NewspaperPartialRenderer>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    paragraphs: 10,
  },
} satisfies Story;

export default meta;
