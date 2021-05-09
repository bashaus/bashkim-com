require("../src/styleguide/main.scss");

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
    exclude: /^(className|[a-zA-Z]+ClassName)$/,
  },
  layout: 'fullscreen'
}
