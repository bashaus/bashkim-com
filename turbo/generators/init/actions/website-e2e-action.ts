import { PlopTypes } from "@turbo/gen";

export function websiteE2EAction(): Array<PlopTypes.ActionType> {
  return [
    {
      type: "add",
      path: "{{ turbo.paths.root }}/packages/website-e2e/.env",
      templateFile: "templates/packages/website-e2e/.env.hbs",
      force: true,
    },
  ];
}
