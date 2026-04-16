import eslintConfig from "@bashkim-com/eslint";

const config = [
  ...eslintConfig.configs.base,
  {
    ignores: ["coverage/*", "**/gql/**"],
  },
];

export default config;
