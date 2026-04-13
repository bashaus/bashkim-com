import { defineParameterType } from "@cucumber/cucumber";

defineParameterType({
  name: "visibility",
  regexp: /see|not see/,
  transformer: (s) => s === "see",
});
