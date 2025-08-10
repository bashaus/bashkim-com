import eslintConfig from "@bashkim-com/eslint";

const config = [
  ...eslintConfig.configs.base,
  {
    ignores: ["coverage/*", "packages/*", ".lighthouserc.cjs"],
  },
];

export default config;
