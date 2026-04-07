import { PlopTypes } from "@turbo/gen";

export function prismicDalAction(): PlopTypes.Actions {
  return [
    {
      type: "add",
      path: "{{ turbo.paths.root }}/packages/prismic-dal/.env",
      templateFile: "templates/packages/prismic-dal/.env.hbs",
    },
  ];
}
