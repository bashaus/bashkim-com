/* eslint-env node */

module.exports = {
  extends: ["@bashkim-com", "plugin:cypress/recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {},
    },
    {
      files: ["src/plugins/index.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "no-undef": "off",
      },
    },
  ],
};
