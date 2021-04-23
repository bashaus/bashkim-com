import type { RichTextBlock } from "prismic-reactjs";

import type { PrismicEmbedType } from "@bashkim-com/prismic/types/Embed";
import type { PrismicImageType } from "@bashkim-com/prismic/types/Image";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";

export type GridVideoSliceType = PrismicSliceType & {
  fields: Array<{
    grid_video_slice_type_video: PrismicEmbedType | null;
    grid_video_slice_type_poster: PrismicImageType | null;
    grid_video_slice_type_description: Array<RichTextBlock> | null;
  }> | null;
};
