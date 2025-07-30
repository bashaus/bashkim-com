import MuiDecorator from "./decorators/MuiDecorator";

export const decorators = [MuiDecorator];

export const parameters = {
  controls: {
    expanded: true,
    sort: "requiredFirst",
    exclude: /^(className|[a-zA-Z]+ClassName)$/,
    matchers: {
      date: /(^date$|Date$|At$)/,
    },
  },

  options: {
    storySort: {
      order: ["Home", "*"],
    },
  },
};
