import EmbedPrismicType from "%types/embed";
import SliceType from "%types/slice";

interface GridEmbedSliceType extends SliceType {
  items: Array<{
    GridEmbedSliceType_Embed: EmbedPrismicType;
  }>;
  primary: {};
}

export default GridEmbedSliceType;
