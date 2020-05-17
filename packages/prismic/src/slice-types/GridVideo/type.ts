import EmbedPrismicType from "%types/embed";
import ImagePrismicType from "%types/image";
import RichTextPrismicType from "%types/rich-text";
import SliceType from "%types/slice";

interface GridVideoSliceType extends SliceType {
  items: Array<{
    GridVideoSliceType_Video: EmbedPrismicType;
    GridVideoSliceType_Poster: ImagePrismicType;
    GridVideoSliceType_Description: RichTextPrismicType<"paragraph">;
  }>;
  primary: {};
}

export default GridVideoSliceType;
