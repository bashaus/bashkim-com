import RichTextPrismicType from "%types/rich-text";
import SliceType from "%types/slice";

interface NewspaperSliceType extends SliceType {
  items: Array<{
    NewspaperSliceType_Group: RichTextPrismicType<
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
