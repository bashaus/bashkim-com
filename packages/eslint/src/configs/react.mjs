import jsxA11y from "eslint-plugin-jsx-a11y";
import muiPathImportsPlugin from "eslint-plugin-mui-path-imports";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";

import env from "./base.mjs";

export default [
  ...env,

  /* eslint-plugin-jsx-a11y */
  jsxA11y.flatConfigs.recommended,

  /* eslint-plugin-react */
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
    },
  },
  {
    rules: {
      "react/jsx-curly-brace-presence": "error",
      "react/jsx-uses-react": "off",
      "react/prefer-read-only-props": "error",
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": [
        "error",
        {
          forbid: [
            { char: ">", alternatives: ["&gt;"] },
            { char: "}", alternatives: ["&#125;"] },
            { char: "’", alternatives: ["&apos;"] },
            { char: '"', alternatives: ["&quot;"] },
          ],
        },
      ],
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
              message: "Use @mui/material/Component",
            },
            {
              name: "@emotion/styled",
              message: "Import from @mui/material/styles instead",
            },
          ],
        },
      ],
    },
  },

  /* eslint-plugin-storybook */
  ...storybook.configs["flat/recommended"],
];
