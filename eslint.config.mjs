import eslintConfig from "@bashkim-com/eslint";

const config = [
  ...eslintConfig.configs.base,
  {
    ignores: ["coverage/*", "packages/*"],
  },
  {
    files: [".lighthouserc.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
      },
    },
  },
];

export default config;
