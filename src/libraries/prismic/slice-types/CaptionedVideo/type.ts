import EmbedPrismicType from "%prismic/types/embed";
import RichTextPrismicType from "%prismic/types/rich-text";
import SliceType from "%prismic/types/slice";

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
