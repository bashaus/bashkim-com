import type { Config } from "jest";

const config: Config = {
  displayName: "design-system",
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
};

export default config;
