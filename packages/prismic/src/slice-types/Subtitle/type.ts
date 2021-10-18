import type { RichTextBlock } from "prismic-reactjs";

import type { PrismicSliceType } from "../../types/Slice";

export type SubtitleSliceType = PrismicSliceType & {
  primary: {
    subtitle_slice_type_heading: Array<RichTextBlock> | null;
    subtitle_slice_type_description: Array<RichTextBlock> | null;
  } | null;
};
