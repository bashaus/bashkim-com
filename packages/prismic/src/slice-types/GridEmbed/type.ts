import type { PrismicEmbedType } from "@bashkim-com/prismic/types/Embed";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";

export type GridEmbedSliceType = PrismicSliceType & {
  fields: Array<{
    grid_embed_slice_type_embed: PrismicEmbedType | null;
  }> | null;
};
