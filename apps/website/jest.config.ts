import type { Config } from "jest";

const config: Config = {
  displayName: "website",
  preset: "../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nrwl/next/babel"] }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],

  /* Coverage */
  coveragePathIgnorePatterns: [".next/"],
};

export default config;
