import type { Config } from "jest";

const config: Config = {
  displayName: "design-system",
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
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/*.d.ts", "!**/stories.tsx"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: ["node_modules/(?!(?:@prismicio|esm-env)/)"],
  moduleNameMapper: {
    "\\.(jpg|png)$": "identity-obj-proxy",
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/../../.jest/transform/svg.ts",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: [
    "<rootDir>/../../.jest/setup/testing-library.jsdom.ts",
    "<rootDir>/../../.jest/setup/next.ts",
  ],
};

export default config;
