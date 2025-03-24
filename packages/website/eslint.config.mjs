import eslintConfig from "@bashkim-com/eslint";
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

const flatCompat = new FlatCompat();

const config = [
  ...eslintConfig.configs.base,
  ...fixupConfigRules(
    flatCompat.extends("next"),
    flatCompat.extends("next/core-web-vitals"),
  ),
  {
    ignores: [".next/*"],
  },

  {
    rules: {
      "react/prefer-read-only-props": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },
];

export default config;
