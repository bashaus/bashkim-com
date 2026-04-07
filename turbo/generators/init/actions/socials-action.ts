import { PlopTypes } from "@turbo/gen";

export function socialsAction(): PlopTypes.Actions {
  return [
    {
      type: "add",
      path: "{{ turbo.paths.root }}/packages/socials/.env",
      templateFile: "templates/packages/socials/.env.hbs",
    },
  ];
}
