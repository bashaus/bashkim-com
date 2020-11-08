import EmbedPrismicType from "%types/embed";
import RichTextPrismicType from "%types/rich-text";
import SliceType from "%types/slice";

interface CaptionedVideoSliceType extends SliceType {
  items: Array<any>;
  primary: {
    captioned_video_slice_type_caption: RichTextPrismicType<
      | "paragraph"
      | "heading3"
      | "strong"
      | "em"
      | "hyperlink"
      | "list-item"
      | "o-list-item"
      | "o-list-item"
    >;
    captioned_video_slice_type_video: EmbedPrismicType;
  };
}

export default CaptionedVideoSliceType;
