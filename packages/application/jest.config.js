module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  // setupFilesAfterEnv: [
  //   '<rootDir>/setupTests.js'
  // ],
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/dest/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/../../node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/.jest/cssTransform.js",
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
