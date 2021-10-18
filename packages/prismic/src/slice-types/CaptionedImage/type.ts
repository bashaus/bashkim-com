import type { RichTextBlock } from "prismic-reactjs";

import type { PrismicImageType } from "../../types/Image";
import type { PrismicSliceType } from "../../types/Slice";

export type CaptionedImageSliceType = PrismicSliceType & {
  primary: {
    captioned_image_slice_type_image: PrismicImageType | null;
    captioned_image_slice_type_caption: Array<RichTextBlock> | null;
    captioned_image_slice_type_image_blurhash: string | null;
  } | null;
};
