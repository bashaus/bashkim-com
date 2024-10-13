import bashkimEslint from "@bashkim-com/eslint";

const config = [
  ...bashkimEslint.configs.base,
  {
    ignores: ["coverage/*", "packages/*"],
  },
];

export default config;
