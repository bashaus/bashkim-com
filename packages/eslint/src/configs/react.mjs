import reactPlugin from "eslint-plugin-react";

import base from "./base.mjs";

export default [
  ...base,

  /* eslint-plugin-react */
  reactPlugin.configs.flat.recommended,
  {
    rules: {
      "react/prefer-read-only-props": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },
];
