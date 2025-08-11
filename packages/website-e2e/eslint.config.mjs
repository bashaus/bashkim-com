import eslintConfig from "@bashkim-com/eslint";

const config = [
  ...eslintConfig.configs.base,
  { ignores: ["./cypress/reports"] },
];

export default config;
