import LinkPrismicType from "@bashkim-com/prismic/types/link";
import SlicePrismicType from "@bashkim-com/prismic/types/slice";
import RichTextPrismicType, {
  RichTextTypePrismicItemType,
} from "@bashkim-com/prismic/types/rich-text";

type AccoladeSliceType = SlicePrismicType & {
  items: Array<{
    accolade_slice_type_award_place:
      | "gold"
      | "silver"
      | "bronze"
      | "honour"
      | "shortlist";
    accolade_slice_type_award_link: LinkPrismicType;
    accolade_slice_type_award_category: RichTextPrismicType<
      RichTextTypePrismicItemType.PARAGRAPH
    >;
  }>;
  primary: {
    accolade_slice_type_issuer: null | RichTextPrismicType<
      RichTextTypePrismicItemType.HEADING3
    >;
    accolade_slice_type_description: null | RichTextPrismicType<
      RichTextTypePrismicItemType.PARAGRAPH
    >;
    accolade_slice_type_date: null | string;
  };
};

export default AccoladeSliceType;
