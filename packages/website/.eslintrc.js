/* eslint-env node */

module.exports = {
  extends: ["@bashkim-com", "next", "next/core-web-vitals"],
  settings: {
    next: {
      rootDir: [__dirname],
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@next/next/no-html-link-for-pages": "off",
      },
    },
  ],
};
