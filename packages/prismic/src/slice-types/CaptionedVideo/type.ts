import type { RichTextBlock } from "prismic-reactjs";

import type { PrismicEmbedType } from "@bashkim-com/prismic/types/Embed";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";

export type CaptionedVideoSliceType = PrismicSliceType & {
  primary: {
    captioned_video_slice_type_caption: Array<RichTextBlock> | null;
    captioned_video_slice_type_video: PrismicEmbedType | null;
  } | null;
};
