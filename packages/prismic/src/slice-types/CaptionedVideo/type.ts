import type { RichTextBlock } from "prismic-reactjs";

import type { PrismicEmbedType } from "../../types/Embed";
import type { PrismicSliceType } from "../../types/Slice";

export type CaptionedVideoSliceType = PrismicSliceType & {
  primary: {
    captioned_video_slice_type_caption: Array<RichTextBlock> | null;
    captioned_video_slice_type_video: PrismicEmbedType | null;
  } | null;
};
