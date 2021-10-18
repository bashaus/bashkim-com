import type { RichTextBlock } from "prismic-reactjs";

import type { PrismicSliceType } from "../../types/Slice";

export type NewspaperSliceType = PrismicSliceType & {
  fields: Array<{
    newspaper_slice_type_group: Array<RichTextBlock> | null;
  }> | null;
};
