import bashkimEslint from "@bashkim-com/eslint";

const config = [
  ...bashkimEslint.configs.base,
  {
    files: ["*.ts", "*.tsx"],
    rules: {},
  },
  {
    ignores: ["graphql/**", "node_modules", "src/github/graphql-types.ts"],
  },
];

export default config;
