import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({});

const config: Config = {
  displayName: "website",
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
  moduleNameMapper: {
    "\\.(jpg|png)$": "identity-obj-proxy",
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/../../.jest/transform/svg.ts",

    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/../../.jest/setup/testing-library.jsdom.ts"],

  /* Coverage */
  coveragePathIgnorePatterns: [".next/"],
};

export default createJestConfig(config);
