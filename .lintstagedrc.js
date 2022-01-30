module.exports = {
  "package.json": ["sort-package-json"],
  "!(styles).{ts,tsx}": ["eslint --fix"],
  "styles.ts": ["eslint --fix", "stylelint --fix"],
  "*.{svg,xml}": (filenames) =>
    filenames.map(
      (filename) => `xmllint --format ${filename} --output ${filename}`
    ),
};
