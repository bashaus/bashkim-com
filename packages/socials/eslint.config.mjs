import eslintConfig from "@bashkim-com/eslint";

const config = [
  ...eslintConfig.configs.base,
  {
    files: ["*.ts", "*.tsx"],
    rules: {},
  },
  {
    ignores: ["src/github/graphql-types.ts"],
  },
];

export default config;
