import muiPathImportsPlugin from "eslint-plugin-mui-path-imports";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

import base from "./base.mjs";

export default [
  ...base,

  /* eslint-plugin-react */
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
    rules: {
      "react/prefer-read-only-props": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },

  /* eslint-plugin-react-hooks */

  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
    },
  },

  /* eslint-plugin-mui-import-paths */
  {
    plugins: {
      "mui-path-imports": muiPathImportsPlugin,
    },
    rules: {
      "mui-path-imports/mui-path-imports": "error",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              importNames: ["default"],
              message: "Use named imports for react",
            },
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
];
