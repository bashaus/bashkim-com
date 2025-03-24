import eslintConfig from "@bashkim-com/eslint";

const config = [
  ...eslintConfig.configs.react,
  {
    ignores: ["storybook-static/*"],
  },
];

export default config;
