import RichTextPrismicType, {
  RichTextTypePrismicItemType,
} from "@bashkim-com/prismic/types/rich-text";
import SliceType from "@bashkim-com/prismic/types/slice";

type SubtitleSliceType = SliceType & {
  items?: Array<unknown>;
  primary: {
    subtitle_slice_type_heading: RichTextPrismicType<
      RichTextTypePrismicItemType.HEADING2
    >;
    subtitle_slice_type_description: RichTextPrismicType<"paragraph">;
  };
};

export default SubtitleSliceType;
