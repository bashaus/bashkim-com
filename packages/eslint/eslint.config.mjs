import eslintConfig from "@bashkim-com/eslint";

const config = [
  ...eslintConfig.configs.base,
  {
    files: ["*.ts", "*.tsx"],
    rules: {},
  },
];

export default config;
