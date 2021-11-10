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
    "/build/",
    "/coverage/",
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.next/",
    "/build/",
    "/coverage/",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "@swc/jest",
    ".+\\.(css|scss)$": "jest-css-modules-transform",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "../../test-results/application/" }],
  ],
};
