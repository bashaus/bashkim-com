import type EmbedPrismicType from "@bashkim-com/prismic/types/embed";
import type RichTextPrismicType from "@bashkim-com/prismic/types/rich-text";
import type SliceType from "@bashkim-com/prismic/types/slice";

type CaptionedVideoSliceType = SliceType & {
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
};

export default CaptionedVideoSliceType;
