import type { Meta, Story } from "@storybook/react";
import faker from "faker";

import {
  RichTextFormatter as RichTextFormatterComponent,
  RichTextFormatterProps,
} from ".";

export default {
  component: RichTextFormatterComponent,
  title: "Formatters/Rich Text Formatter",
  args: {},
  parameters: {
    layout: "padded",
  },
} as Meta;

const Template: Story<RichTextFormatterProps> = (
  args: RichTextFormatterProps
) => (
  <RichTextFormatterComponent {...args}>
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
  </RichTextFormatterComponent>
);

export const RichTextFormatter = Template.bind({});
