import EmbedPrismicType from "%types/embed";
import SliceType from "%types/slice";

interface GridEmbedSliceType extends SliceType {
  items: Array<{
    grid_embed_slice_type_embed: EmbedPrismicType;
  }>;
  primary: {};
}

export default GridEmbedSliceType;
