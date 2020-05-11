import RichTextPrismicType, {
  RichTextTypePrismicItemType,
} from "%prismic/types/rich-text";
import SliceType from "%prismic/types/slice";

interface SubtitleSliceType extends SliceType {
  items?: Array<{}>;
  primary: {
    SubtitleSliceType_Heading: RichTextPrismicType<
      RichTextTypePrismicItemType.HEADING2
    >;
    SubtitleSliceType_Description: RichTextPrismicType<"paragraph">;
  };
}

export default SubtitleSliceType;
