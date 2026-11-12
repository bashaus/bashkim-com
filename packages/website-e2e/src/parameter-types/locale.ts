import { defineParameterType } from "@cucumber/cucumber";

defineParameterType({
  name: "locale",
  regexp: /ca|en|es/,
});
