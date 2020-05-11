import React from "react";
import ComponentDecorator from "%storybook/decorators/component";

import Logo from ".";

export default {
  title: "Components/Logo",
  decorators: [ComponentDecorator],
};

export const Render = (): JSX.Element => <Logo />;
