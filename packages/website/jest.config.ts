import type { Config } from "jest";

const config: Config = {
  displayName: "website",
  transform: {
    "^.+\\.[tj]sx?$": "@swc/jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],

  /* Coverage */
  coveragePathIgnorePatterns: [".next/"],
};

export default config;
