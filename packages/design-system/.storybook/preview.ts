import MuiDecorator from "./decorators/MuiDecorator";

export const decorators = [MuiDecorator];

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

  options: {
    storySort: {
      order: ["Introduction", "*"],
    },
  },
};
