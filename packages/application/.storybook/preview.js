import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);

/* default styles */
require("../src/styleguide/main.scss");
