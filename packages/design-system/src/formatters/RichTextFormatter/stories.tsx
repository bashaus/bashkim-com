import { Meta, Story } from "@storybook/react";
import faker from "faker";

import { RichTextFormatter, RichTextFormatterProps } from ".";

export default {
  component: RichTextFormatter,
  title: "Formatters/RichTextFormatter",
  args: {},
  parameters: {
    layout: "padded",
  },
} as Meta;

const Template: Story<RichTextFormatterProps> = (
  args: RichTextFormatterProps
) => (
  <RichTextFormatter {...args}>
    <h1>&lt;RichTextFormatter /&gt;</h1>
    <p>
      The RichTextFormatter component is designed to take semantical HTML and
      display it to the browser with some basic styling principles applied. This
      formatter is useful for Prismic Rich Text areas, where the structured
      content is provided externally.
    </p>

    <h1>Heading one</h1>
    <h2>Heading two</h2>
    <h3>Heading three</h3>
    <p>{faker.lorem.paragraph()}</p>
    <p>
      {faker.lorem.sentences(1)} <strong>{faker.lorem.sentences(1)}</strong>
    </p>
    <ul>
      <li>{faker.lorem.words(5)}</li>
      <li>{faker.lorem.words(5)}</li>
      <li>{faker.lorem.words(5)}</li>
    </ul>
    <ol>
      <li>{faker.lorem.words(5)}</li>
      <li>{faker.lorem.words(5)}</li>
      <li>{faker.lorem.words(5)}</li>
    </ol>
  </RichTextFormatter>
);

export const Render = Template.bind({});
