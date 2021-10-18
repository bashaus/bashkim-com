module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: [
    "../src/components/**/stories.tsx",
    "../src/layout/**/stories.tsx",
    "../src/formatters/**/stories.tsx",
    "../src/partials/**/stories.tsx",
    "../src/slices/**/stories.tsx",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
  ],
};
