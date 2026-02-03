export default {
  displayName: "prismic-schema",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results/jest",
        ancestorSeparator: " › ",
        usePathForSuiteName: "true",
      },
    ],
  ],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/*.d.ts", "!**/stories.tsx"],
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]sx?$": "@swc/jest",
  },
  moduleFileExtensions: ["ts", "js", "html"],
};
