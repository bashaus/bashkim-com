import eslintConfig from "@bashkim-com/eslint";

const config = [
  ...eslintConfig.configs.base,
  { ignores: ["coverage/*", "./cypress/reports"] },
];

export default config;
