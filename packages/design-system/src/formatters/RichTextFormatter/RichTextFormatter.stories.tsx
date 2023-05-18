import type { Meta, StoryFn } from "@storybook/react";

import {
  RichTextFormatter as RichTextFormatterComponent,
  RichTextFormatterProps,
} from "./RichTextFormatter";

export default {
  component: RichTextFormatterComponent,
  title: "Formatters/Rich Text Formatter",
  args: {},
  parameters: {
    layout: "padded",
  },
} as Meta;

const Template: StoryFn<RichTextFormatterProps> = (
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
    <p>
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Nunc lobortis orci sapien, at fermentum metus commodo
      et. Mauris vitae massa eget erat fringilla porttitor at.
    </p>
    <p>
      In condimentum laoreet nunc et ornare.{" "}
      <strong>Suspendisse aliquam ut quam a blandit.</strong>
    </p>
    <ul>
      <li>Mauris mi elit, tincidunt at.</li>
      <li>Suspendisse sodales, dui sit amet.</li>
      <li>Sed vehicula sodales dolor, sit.</li>
    </ul>
    <ol>
      <li>Ut at risus lacus. In. </li>
      <li>Proin quis tortor orci. Pellentesque.</li>
      <li>Proin eget lacus euismod, pulvinar.</li>
    </ol>
  </RichTextFormatterComponent>
);

export const RichTextFormatter = {
  render: Template,
};
