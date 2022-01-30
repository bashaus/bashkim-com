module.exports = {
  rootDir: ".",
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/stories.tsx",
    "!**/node_modules/**",
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "/lib/", "/coverage/"],
  moduleNameMapper: {
    "^@bashkim-com/(.*)$": "<rootDir>/../$1/lib",
  },
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "../../test-results/design-system/" }],
  ],
  testPathIgnorePatterns: ["/node_modules/", "/lib/", "/coverage/"],
  transform: {
    "^.+\\.[jt]sx?$": "@swc/jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
};
