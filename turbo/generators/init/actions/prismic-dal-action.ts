import { PlopTypes } from "@turbo/gen";

export function prismicDalAction(): Array<PlopTypes.ActionType> {
  return [
    {
      type: "add",
      path: "{{ turbo.paths.root }}/packages/prismic-dal/.env",
      templateFile: "templates/packages/prismic-dal/.env.hbs",
    },
  ];
}
