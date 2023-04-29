module.exports = {
  root: true,
  plugins: ["@nx", "simple-import-sort", "import", "sonarjs"],
  overrides: [
    {
      files: ["*.{js,jsx,ts,tsx}"],
      rules: {
        "@nx/enforce-module-boundaries": [
          "error",
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: "*",
                onlyDependOnLibsWithTags: ["*"],
              },
            ],
          },
        ],
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
      },
    },
    {
      files: ["*.{ts,tsx}"],
      extends: ["plugin:@nx/typescript", "plugin:sonarjs/recommended"],
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
      },
    },
    {
      files: ["*.{js,jsx}"],
      extends: ["plugin:@nx/javascript", "plugin:sonarjs/recommended"],
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
