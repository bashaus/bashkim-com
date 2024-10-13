import bashkimEslint from "@bashkim-com/eslint";

const config = [
  ...bashkimEslint.configs.base,
  {
    files: ["*.ts", "*.tsx"],
    rules: {},
  },
];

export default config;
