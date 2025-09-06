import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import jestPlugin from "eslint-plugin-jest";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import promisePlugin from "eslint-plugin-promise";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import sonarjsPlugin from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint";

const flatCompat = new FlatCompat();

export default defineConfig(
  /* eslint */
  js.configs.recommended,
  {
    ignores: ["dist/*", ".turbo/*", "coverage/*", "test-reports/*"],
  },
  {
    rules: {
      curly: "error",
    },
  },

  /* typescript-eslint */
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/array-type": ["error", { default: "generic" }],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-ignore": "allow-with-description" },
      ],
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", ignoreRestSiblings: true },
      ],
    },
  },

  /* eslint-plugin-promise */
  promisePlugin.configs["flat/recommended"],

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

  /* eslint-plugin-import */
  ...fixupConfigRules(flatCompat.plugins("import")),
  {
    rules: {
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
    },
  },

  /* eslint-plugin-sonarjs */
  sonarjsPlugin.configs.recommended,

  /* eslint-plugin-jest */
  {
    files: ["*.spec.{ts,tsx}"],
    ...jestPlugin.configs["flat/recommended"],
  },

  /* eslint-plugin-prettier */
  prettierPlugin,
);
