import RichTextPrismicType from "%types/rich-text";
import SliceType from "%types/slice";

interface NewspaperSliceType extends SliceType {
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
  primary: {};
}

export default NewspaperSliceType;
