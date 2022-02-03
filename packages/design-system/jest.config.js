module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/stories.tsx",
    "!**/node_modules/**",
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "/lib/", "/coverage/"],
  testPathIgnorePatterns: ["/node_modules/", "/lib/", "/coverage/"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    ".+\\.s?css$": "jest-css-modules-transform",
  },
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.s?css$"],
  moduleNameMapper: {
    "^.+\\.module\\.s?css$": "identity-obj-proxy",
  },
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "../../test-results/design-system/" }],
  ],
};
