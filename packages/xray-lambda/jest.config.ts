export default {
  displayName: "xray-lambda",
  globals: {},
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]sx?$": "@swc/jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
