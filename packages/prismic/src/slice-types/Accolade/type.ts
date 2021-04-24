import type { RichTextBlock } from "prismic-reactjs";

import type { PrismicDateType } from "@bashkim-com/prismic/types/Date";
import type { PrismicLinkType } from "@bashkim-com/prismic/types/Link";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";

export enum AccoladeSliceTypeAwardPlace {
  GOLD = "gold",
  SILVER = "silver",
  BRONZE = "bronze",
  HONOUR = "honour",
  SHORTLIST = "shortlist",
}

export type AccoladeSliceType = PrismicSliceType & {
  primary: {
    accolade_slice_type_issuer: Array<RichTextBlock> | null;
    accolade_slice_type_description: Array<RichTextBlock> | null;
    accolade_slice_type_date: PrismicDateType | null;
  } | null;
  fields: Array<{
    accolade_slice_type_award_place: AccoladeSliceTypeAwardPlace | null;
    accolade_slice_type_award_link: PrismicLinkType | null;
    accolade_slice_type_award_category: Array<RichTextBlock> | null;
  }> | null;
};
