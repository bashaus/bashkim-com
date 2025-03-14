import eslintConfig from "@bashkim-com/eslint";

const config = [
  ...eslintConfig.configs.base,
  {
    files: ["*.ts", "*.tsx"],
    rules: {},
  },
  {
    ignores: ["storybook-static/*"],
  },
];

export default config;
