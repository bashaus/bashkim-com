import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({});

const config: Config = {
  displayName: "website",
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
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: [
    "<rootDir>/../../.jest/setup/testing-library.jsdom.ts",
    "<rootDir>/../../.jest/setup/window.matchMedia.ts",
  ],

  /* Coverage */
  coveragePathIgnorePatterns: [".next/"],
};

export default createJestConfig(config);
