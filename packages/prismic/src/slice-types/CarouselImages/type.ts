import type { RichTextBlock } from "prismic-reactjs";

import type { PrismicImageType } from "@bashkim-com/prismic/types/Image";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";

export type CarouselImagesSliceType = PrismicSliceType & {
  fields: Array<{
    carousel_images_slice_type_caption: Array<RichTextBlock> | null;
    carousel_images_slice_type_image: PrismicImageType | null;
  }> | null;
};
