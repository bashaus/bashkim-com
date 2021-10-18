import type { PrismicEmbedType } from "../../types/Embed";
import type { PrismicSliceType } from "../../types/Slice";

export type GridEmbedSliceType = PrismicSliceType & {
  fields: Array<{
    grid_embed_slice_type_embed: PrismicEmbedType | null;
  }> | null;
};
