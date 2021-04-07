import RichTextPrismicType from "@bashkim-com/prismic/types/rich-text";
import SliceType from "@bashkim-com/prismic/types/slice";

type NewspaperSliceType = SliceType & {
  items: Array<{
    newspaper_slice_type_group: RichTextPrismicType<
      | "paragraph"
      | "heading3"
      | "strong"
      | "em"
      | "hyperlink"
      | "image"
      | "embed"
      | "list-item"
      | "o-list-item"
      | "o-list-item"
    >;
  }>;
  primary: unknown;
};

export default NewspaperSliceType;
