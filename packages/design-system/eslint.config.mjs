import bashkimEslint from "@bashkim-com/eslint";

const config = [
  ...bashkimEslint.configs.base,
  {
    files: ["*.ts", "*.tsx"],
    rules: {},
  },
  {
    ignores: ["storybook-static/*"],
  },
];

export default config;
