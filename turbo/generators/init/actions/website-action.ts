import { PlopTypes } from "@turbo/gen";

export function websiteAction(): PlopTypes.Actions {
  return [
    {
      type: "add",
      path: "{{ turbo.paths.root }}/packages/website/.env.local",
      templateFile: "templates/packages/website/.env.local.hbs",
    },
  ];
}
