module.exports = {
  "package.json": ["sort-package-json"],
  "*.{css,scss}": ["stylelint"],
  "*.{js,ts,tsx}": ["eslint"],
  "*.html": ["prettier --write"],
  "*.json": ["prettier --write"],
  "*.md": ["prettier --write"],
  "*.{svg,xml}": filenames => filenames.map(
    (filename) => `xmllint --format ${filename} --output ${filename}`
  ),
  "*.{yml,yaml}": ["yamllint"],
}
