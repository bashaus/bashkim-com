import EmbedPrismicType from "%types/embed";
import RichTextPrismicType from "%types/rich-text";
import SliceType from "%types/slice";

interface CaptionedVideoSliceType extends SliceType {
  items: Array<any>;
  primary: {
    CaptionedVideoSliceType_Caption: RichTextPrismicType<
      | "paragraph"
      | "heading3"
      | "strong"
      | "em"
      | "hyperlink"
      | "list-item"
      | "o-list-item"
      | "o-list-item"
    >;
    CaptionedVideoSliceType_Video: EmbedPrismicType;
  };
}

export default CaptionedVideoSliceType;
