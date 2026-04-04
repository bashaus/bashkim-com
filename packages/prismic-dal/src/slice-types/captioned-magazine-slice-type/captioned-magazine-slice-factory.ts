import { Factory } from "fishery";

import { CaptionedMagazineSliceTypeFragment } from "../../gql/graphql";
import { captionedMagazineSliceFieldFactory } from "./captioned-magazine-slice-field-factory";
import { captionedMagazineSlicePrimaryFactory } from "./captioned-magazine-slice-primary-factory";

export const captionedMagazineSliceFactory =
  Factory.define<CaptionedMagazineSliceTypeFragment>(() => {
    return {
      type: "CaptionedMagazineSliceType",
      label: null,
      primary: captionedMagazineSlicePrimaryFactory.build(),
      fields: captionedMagazineSliceFieldFactory.buildList(4),
    };
  });
