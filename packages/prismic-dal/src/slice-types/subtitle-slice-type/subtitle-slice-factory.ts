import { Factory } from "fishery";

import { SubtitleSliceTypeFragment } from "../../gql/graphql";
import { subtitleSlicePrimaryFactory } from "./subtitle-slice-primary-factory";

export const subtitleSliceFactory = Factory.define<SubtitleSliceTypeFragment>(
  () => {
    return {
      type: "SubtitleSliceType",
      label: null,
      primary: subtitleSlicePrimaryFactory.build(),
    };
  },
);
