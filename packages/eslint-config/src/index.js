/* eslint-env node */

module.exports = {
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
  env: {
    es2021: true,
  },
  overrides: [
    {
      files: ["*.{js,jsx,ts,tsx}"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:promise/recommended",
        "plugin:prettier/recommended",
        "plugin:sonarjs/recommended",
      ],
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        "prettier/prettier": "error",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "react",
                importNames: ["default"],
                message: "Use named imports for React",
              },
            ],
          },
        ],
      },
    },
    {
      files: ["*.{ts,tsx}"],
      extends: [],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
      },
    },
    {
      files: ["*.{js,jsx}"],
      extends: [],
      rules: {},
    },
    {
      files: ["*.spec.{js,jsx,ts,tsx}"],
      extends: ["plugin:jest/recommended"],
      env: {
        "jest/globals": true,
      },
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
