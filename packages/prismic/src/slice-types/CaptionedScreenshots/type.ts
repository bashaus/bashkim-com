import type { RichTextBlock } from "prismic-reactjs";

import type { PrismicImageType } from "@bashkim-com/prismic/types/Image";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";

export type CaptionedScreenshotsSliceType = PrismicSliceType & {
  fields: Array<{
    captioned_screenshots_slice_type_images: PrismicImageType | null;
  }> | null;
  primary: {
    captioned_screenshots_slice_type_caption: Array<RichTextBlock> | null;
  } | null;
};
