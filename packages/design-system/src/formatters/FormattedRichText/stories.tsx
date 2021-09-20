import React from "react";
import faker from "faker";

import { FormattedRichText, FormattedRichTextProps } from ".";

export default {
  component: FormattedRichText,
  title: "Formatters/FormattedRichText",
  parameters: {
    layout: "padded",
  },
};

const Template = (args: FormattedRichTextProps) => (
  <FormattedRichText {...args}>
    <h2>&lt;FormattedRichText /&gt;</h2>
    <p>
      The FormattedRichText component is designed to take semantical HTML and
      display it to the browser with some basic styling principles applied. This
      is particularly useful for Prismic Rich Text areas where the structured
      content is provided externally.
    </p>

    <h3>Heading three</h3>
    <p>{faker.lorem.paragraph()}</p>
    <p>
      {faker.lorem.sentences(1)} <strong>{faker.lorem.sentences(1)}</strong>.
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
  </FormattedRichText>
);

export const Render = Template.bind({});
Render.args = {};
