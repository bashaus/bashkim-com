import eslintConfig from "@bashkim-com/eslint";
import storybook from "eslint-plugin-storybook";

const config = [
  ...eslintConfig.configs.react,
  ...storybook.configs["flat/recommended"],
  {
    ignores: ["storybook-static/*"],
  },
];

export default config;
