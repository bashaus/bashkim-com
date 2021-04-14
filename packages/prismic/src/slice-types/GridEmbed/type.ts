import type EmbedPrismicType from "@bashkim-com/prismic/types/embed";
import type SliceType from "@bashkim-com/prismic/types/slice";

type GridEmbedSliceType = SliceType & {
  items: Array<{
    grid_embed_slice_type_embed: EmbedPrismicType;
  }>;
  primary: unknown;
};

export default GridEmbedSliceType;
