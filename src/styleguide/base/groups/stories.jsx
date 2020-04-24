import React from "react";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("Style Guide: Base/Groups", module);

stories
  .add("default", (): JSX.Element => (
    <section className="group">This is a standard group style.</section>
  ))

  .add("alternate", (): JSX.Element => (
    <section className="group-alternate">
      This is an alternate group style.
    </section>
  ));
