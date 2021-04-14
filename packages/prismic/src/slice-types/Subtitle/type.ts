import type RichTextPrismicType from "@bashkim-com/prismic/types/rich-text";
import type { RichTextTypePrismicItemType } from "@bashkim-com/prismic/types/rich-text";
import type SliceType from "@bashkim-com/prismic/types/slice";

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
