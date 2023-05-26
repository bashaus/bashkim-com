/* eslint-disable */
export default {
  displayName: "xray-lambda",
  globals: {},
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]sx?$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.spec.json",
      },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
