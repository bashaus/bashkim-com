import type { Meta, StoryFn } from "@storybook/react";

import FullTextPartialComponent, { FullTextPartialProps } from ".";

export default {
  component: FullTextPartialComponent,
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
  <FullTextPartialComponent {...args}>
    <h3>{title}</h3>
    {Array(6)
      .fill("")
      .map((_value, i) => i + 1)
      .map((value) => (
        <p key={value}>
          Aliquam eu dictum justo. Morbi purus orci, auctor ac maximus at,
          lobortis at leo. Aenean a pulvinar nibh. Phasellus sagittis pulvinar
          risus, non varius mi luctus vel. Etiam laoreet eget.
        </p>
      ))}
  </FullTextPartialComponent>
);

export const FullTextPartial = {
  render: Template,
};
