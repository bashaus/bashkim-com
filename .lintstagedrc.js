module.exports = {
  "package.json": ["sort-package-json"],
  "!(styles).{js,ts,tsx}": ["eslint --fix"],
  "styles.ts": ["eslint --fix", "stylelint --fix"],
  "*.svg": ["svgo"],
};
