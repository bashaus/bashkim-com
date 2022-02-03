module.exports = {
  "package.json": ["sort-package-json"],
  "*.{css,scss}": ["stylelint --fix"],
  "*.{ts,tsx}": ["eslint --fix"],
  "*.{svg,xml}": (filenames) =>
    filenames.map(
      (filename) => `xmllint --format ${filename} --output ${filename}`
    ),
};
