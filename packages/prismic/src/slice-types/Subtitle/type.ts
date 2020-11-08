import RichTextPrismicType, {
  RichTextTypePrismicItemType,
} from "%types/rich-text";
import SliceType from "%types/slice";

interface SubtitleSliceType extends SliceType {
  items?: Array<{}>;
  primary: {
    subtitle_slice_type_heading: RichTextPrismicType<
      RichTextTypePrismicItemType.HEADING2
    >;
    subtitle_slice_type_description: RichTextPrismicType<"paragraph">;
  };
}

export default SubtitleSliceType;
