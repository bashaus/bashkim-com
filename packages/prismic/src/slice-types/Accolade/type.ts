import LinkPrismicType from "%types/link";
import SlicePrismicType from "%types/slice";
import RichTextPrismicType, {
  RichTextTypePrismicItemType,
} from "%types/rich-text";

interface AccoladeSliceType extends SlicePrismicType {
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
    accolade_slice_type_issuer?: RichTextPrismicType<
      RichTextTypePrismicItemType.HEADING3
    >;
    accolade_slice_type_description?: RichTextPrismicType<
      RichTextTypePrismicItemType.PARAGRAPH
    >;
    accolade_slice_type_date?: string;
  };
}

export default AccoladeSliceType;
