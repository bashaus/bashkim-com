import { getJestProjects } from "@nx/jest";
import type { Config } from "jest";

const config: Config = {
  projects: getJestProjects(),
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
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/*.d.ts", "!**/*.stories.tsx"],
};

export default config;
