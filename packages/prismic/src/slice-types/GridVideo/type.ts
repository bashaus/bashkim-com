import EmbedPrismicType from "%types/embed";
import ImagePrismicType from "%types/image";
import RichTextPrismicType from "%types/rich-text";
import SliceType from "%types/slice";

interface GridVideoSliceType extends SliceType {
  items: Array<{
    grid_video_slice_type_video: EmbedPrismicType;
    grid_video_slice_type_poster: ImagePrismicType;
    grid_video_slice_type_description: RichTextPrismicType<"paragraph">;
  }>;
  primary: {};
}

export default GridVideoSliceType;
