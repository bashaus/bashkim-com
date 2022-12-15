import { getJestProjects } from "@nrwl/jest";

export default {
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
};
