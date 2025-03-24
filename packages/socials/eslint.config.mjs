import eslintConfig from "@bashkim-com/eslint";

const config = [
  ...eslintConfig.configs.base,
  {
    ignores: ["src/github/graphql-types.ts"],
  },
];

export default config;
