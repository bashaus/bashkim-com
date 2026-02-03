import eslintConfig from "@bashkim-com/eslint";

const config = [
  ...eslintConfig.configs.base,
  {
    ignores: ["coverage/*", "src/github/graphql-types.ts"],
  },
];

export default config;
