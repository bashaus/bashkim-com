import type EmbedPrismicType from "@bashkim-com/prismic/types/embed";
import type ImagePrismicType from "@bashkim-com/prismic/types/image";
import type RichTextPrismicType from "@bashkim-com/prismic/types/rich-text";
import type SliceType from "@bashkim-com/prismic/types/slice";

type GridVideoSliceType = SliceType & {
  items: Array<{
    grid_video_slice_type_video: EmbedPrismicType;
    grid_video_slice_type_poster: ImagePrismicType;
    grid_video_slice_type_description: RichTextPrismicType<"paragraph">;
  }>;
  primary: unknown;
};

export default GridVideoSliceType;
