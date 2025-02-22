export default {
  "package.json": ["sort-package-json"],
  "*.{js,ts,tsx}": ["eslint --fix"],
  "*.svg": ["svgo"],
  "*": ["prettier --write --ignore-unknown"],
};
