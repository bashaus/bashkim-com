import bashkimEslint from "@bashkim-com/eslint";
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

const flatCompat = new FlatCompat();

const config = [
  ...bashkimEslint.configs.base,
  ...fixupConfigRules(
    flatCompat.extends("next"),
    flatCompat.extends("next/core-web-vitals"),
  ),
  {
    ignores: [".next/*"],
  },
];

export default config;
