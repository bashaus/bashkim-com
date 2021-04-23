import type { RichTextBlock } from "prismic-reactjs";

import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";

export type FullTextSliceType = PrismicSliceType & {
  primary: {
    full_text_slice_type_body: Array<RichTextBlock> | null;
  } | null;
};
