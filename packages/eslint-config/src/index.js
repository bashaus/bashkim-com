/* eslint-env node */
module.exports = {
  root: true,
  plugins: [
    "simple-import-sort",
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "sonarjs",
    "promise",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.{js,jsx,ts,tsx}"],
      rules: {
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
      },
    },
    {
      files: ["*.{ts,tsx}"],
      extends: ["plugin:sonarjs/recommended"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
      },
    },
    {
      files: ["*.{js,jsx}"],
      extends: ["plugin:sonarjs/recommended"],
      rules: {},
    },
    {
      files: ["*.spec.{js,jsx,ts,tsx}"],
      rules: {
        /**
         * The `describe` and `it` functions will commonly use the same values.
         * Duplicated strings in this case are acceptable.
         */
        "sonarjs/no-duplicate-string": 0,
      },
    },
    {
      files: ["*.stories.{js,jsx,ts,tsx}"],
      extends: ["plugin:storybook/recommended"],
    },
  ],
};
