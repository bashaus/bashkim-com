import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import jestPlugin from "eslint-plugin-jest";
import muiPathImportsPlugin from "eslint-plugin-mui-path-imports";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import promisePlugin from "eslint-plugin-promise";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import sonarjsPlugin from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint";

const flatCompat = new FlatCompat();

export default tseslint.config(
  {
    ignores: ["dist/*", ".turbo/*"],
  },

  /* typescript-eslint */
  ...tseslint.configs.recommended,

  /* eslint-plugin-promise */
  promisePlugin.configs["flat/recommended"],

  /* eslint */
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              importNames: ["default"],
              message: "Use named imports for react",
            },
          ],
          paths: [
            {
              name: "@mui/material",
              importNames: ["default"],
              message: "Use named imports for @mui/material",
            },
          ],
        },
      ],
    },
  },

  /* eslint-plugin-simple-import-sort */
  {
    plugins: {
      "simple-import-sort": simpleImportSortPlugin,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },

  /* */

  {
    plugins: {
      "mui-path-imports": muiPathImportsPlugin,
    },
    rules: {
      "mui-path-imports/mui-path-imports": "error",
    },
  },

  /* eslint-plugin-prettier */
  prettierPlugin,

  /* eslint-plugin-sonarjs */
  sonarjsPlugin.configs.recommended,

  /* eslint-plugin-import */
  ...fixupConfigRules(flatCompat.plugins("import")),
  {
    rules: {
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
    },
  },

  // {
  //   plugins: {
  //     "jsx-a11y",
  //   },
  // },

  {
    files: ["*.spec.{ts,tsx}"],
    ...jestPlugin.configs["flat/recommended"],
    rules: {
      ...jestPlugin.configs["flat/recommended"].rules,
      /**
       * The `describe` and `it` functions will commonly use the same values.
       * Duplicated strings in this case are acceptable.
       */
      "sonarjs/no-duplicate-string": 0,
    },
  },
);
