import type { Meta, Story } from "@storybook/react";

import {
  NewspaperPartial as NewspaperPartialComponent,
  NewspaperPartialProps,
} from ".";

export default {
  component: NewspaperPartialComponent,
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

type NewspaperPartialStoryProps = NewspaperPartialProps & {
  paragraphs: number;
};

const Template: Story<NewspaperPartialStoryProps> = ({
  paragraphs,
  ...args
}: NewspaperPartialStoryProps) => (
  <NewspaperPartialComponent {...args}>
    {Array(paragraphs)
      .fill("")
      .map((_value, index) => (
        <div key={index}>
          Paragraph {index + 1}: Pellentesque sit amet luctus diam. Aenean
          lobortis non arcu sit amet fringilla. Proin sodales vel orci a
          venenatis. Mauris vulputate, dolor eu consectetur congue, mi leo
          eleifend lorem, ac lacinia.
        </div>
      ))}
  </NewspaperPartialComponent>
);

export const NewspaperPartial = Template.bind({});
