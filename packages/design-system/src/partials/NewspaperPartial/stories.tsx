import type { Meta, StoryFn } from "@storybook/nextjs";

import NewspaperPartial, { NewspaperPartialProps } from ".";

export default {
  component: NewspaperPartial,
  title: "Partials/Newspaper Partial",
  args: {
    paragraphs: 10,
  },
  argTypes: {
    paragraphs: {
      control: "number",
      min: 1,
      max: 100,
      table: { category: "Story helpers" },
    },
  },
} as Meta;

type NewspaperPartialStoryProps = Readonly<
  NewspaperPartialProps & {
    paragraphs: number;
  }
>;

const Template: StoryFn<NewspaperPartialStoryProps> = ({
  paragraphs,
  ...args
}: NewspaperPartialStoryProps) => (
  <NewspaperPartial {...args}>
    {Array(paragraphs)
      .fill("")
      .map((_value, i) => i + 1)
      .map((value) => (
        <div key={value}>
          Paragraph {value}: Pellentesque sit amet luctus diam. Aenean lobortis
          non arcu sit amet fringilla. Proin sodales vel orci a venenatis.
          Mauris vulputate, dolor eu consectetur congue, mi leo eleifend lorem,
          ac lacinia.
        </div>
      ))}
  </NewspaperPartial>
);

export const Fixture = {
  render: Template,
};
