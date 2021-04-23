import type { RichTextBlock } from "prismic-reactjs";

import type { PrismicImageType } from "@bashkim-com/prismic/types/Image";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";

export type CaptionedImageSliceType = PrismicSliceType & {
  primary: {
    captioned_image_slice_type_image: PrismicImageType | null;
    captioned_image_slice_type_caption: Array<RichTextBlock> | null;
    captioned_image_slice_type_image_blurhash: string | null;
  } | null;
};
