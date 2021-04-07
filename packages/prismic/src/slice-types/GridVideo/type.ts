import EmbedPrismicType from "@bashkim-com/prismic/types/embed";
import ImagePrismicType from "@bashkim-com/prismic/types/image";
import RichTextPrismicType from "@bashkim-com/prismic/types/rich-text";
import SliceType from "@bashkim-com/prismic/types/slice";

type GridVideoSliceType = SliceType & {
  items: Array<{
    grid_video_slice_type_video: EmbedPrismicType;
    grid_video_slice_type_poster: ImagePrismicType;
    grid_video_slice_type_description: RichTextPrismicType<"paragraph">;
  }>;
  primary: unknown;
};

export default GridVideoSliceType;
