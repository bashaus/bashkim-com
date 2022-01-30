module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/stories.tsx",
    "!**/node_modules/**",
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/.next/",
    "/dist/",
    "/coverage/",
  ],
  moduleNameMapper: {
    "^@bashkim-com/(.*)$": "<rootDir>/../$1/lib",
  },
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "../../test-results/application/" }],
  ],
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/dist/", "/coverage/"],
  transform: {
    "^.+\\.[jt]sx?$": "@swc/jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
};
