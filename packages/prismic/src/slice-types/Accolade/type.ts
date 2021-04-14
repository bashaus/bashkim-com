import type { PrismicDate } from "@bashkim-com/prismic/types/Date";
import type { PrismicLinkType } from "@bashkim-com/prismic/types/Link";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";
import type {
  PrismicRichTextType,
  PrismicRichTextElement,
} from "@bashkim-com/prismic/types/RichText";

export enum AccoladeSliceTypeAwardPlace {
  GOLD = "gold",
  SILVER = "silver",
  BRONZE = "bronze",
  HONOUR = "honour",
  SHORTLIST = "shortlist",
}

export type AccoladeSliceType = PrismicSliceType & {
  primary: {
    accolade_slice_type_issuer: PrismicRichTextType<
      PrismicRichTextElement.HEADING3
    > | null;
    accolade_slice_type_description: PrismicRichTextType<
      PrismicRichTextElement.PARAGRAPH
    > | null;
    accolade_slice_type_date: PrismicDate | null;
  } | null;
  fields: Array<{
    accolade_slice_type_award_place: AccoladeSliceTypeAwardPlace | null;
    accolade_slice_type_award_link: PrismicLinkType | null;
    accolade_slice_type_award_category: PrismicRichTextType<
      PrismicRichTextElement.PARAGRAPH
    > | null;
  }> | null;
};
