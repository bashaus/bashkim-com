import eslintConfig from "@bashkim-com/eslint";

const config = [
  ...eslintConfig.configs.react,
  {
    ignores: ["coverage/*", "packages/*"],
  },
];

export default config;
