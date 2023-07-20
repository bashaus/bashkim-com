module.exports = {
  "package.json": ["sort-package-json"],
  "*.{js,ts,tsx}": ["eslint --fix"],
  "*.{css,scss}": ["stylelint --fix"],
  "*.svg": ["svgo"],
  "*": ["prettier --write --ignore-unknown"],
};
