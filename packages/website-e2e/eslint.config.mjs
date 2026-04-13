import eslintConfig from "@bashkim-com/eslint";

const config = [
  ...eslintConfig.configs.base,
  { ignores: ["coverage/*", "test-results/**"] },
];

export default config;
