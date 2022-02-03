require("../src/styleguide/main.scss");

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    sort: "requiredFirst",
    exclude: /^(className|[a-zA-Z]+ClassName)$/,
    matchers: {
      color: /color$/i,
      date: /(^date$|Date$)/,
      boolean: /^(is|has)/,
    },
  },
  layout: "fullscreen",
};
