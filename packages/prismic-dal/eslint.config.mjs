// @ts-check

import eslintConfig from "@bashkim-com/eslint";

const config = [
  ...eslintConfig.configs.react,
  {
    ignores: ["src/gql/**"],
  },
];

export default config;
