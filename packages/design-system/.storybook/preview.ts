import { NormalizeDecorator } from "./decorators/NormalizeDecorator";

export const decorators = [NormalizeDecorator];

export const parameters = {
  controls: {
    expanded: true,
    sort: "requiredFirst",
    exclude: /^(className|[a-zA-Z]+ClassName)$/,
    matchers: {
      color: /(^color$|Color$)/i,
      date: /(^date$|Date$)/,
      boolean: /^(is|has)/,
    },
  },
  layout: "fullscreen",
};
export const tags = ["autodocs"];
