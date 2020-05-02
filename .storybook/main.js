module.exports = {
  stories: [
    "../src/components/**/stories.tsx",
    "../src/libraries/prismic/**/stories.tsx",
  ],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-a11y/register",
  ]
};
