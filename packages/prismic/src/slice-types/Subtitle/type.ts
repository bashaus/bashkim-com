import RichTextPrismicType, {
  RichTextTypePrismicItemType,
} from "%types/rich-text";
import SliceType from "%types/slice";

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
