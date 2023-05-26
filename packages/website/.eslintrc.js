module.exports = {
  extends: ["next", "next/core-web-vitals", "../../.eslintrc.js"],
  ignorePatterns: ["!**/*", ".next/**/*"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {},
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {},
    },
    {
      files: ["*.js", "*.jsx"],
      rules: {},
    },
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  env: {
    jest: true,
  },
  settings: {
    next: {
      rootDir: ["packages/website/"],
    },
  },
};
