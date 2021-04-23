import type { RichTextBlock } from "prismic-reactjs";

import type { PrismicImageType } from "@bashkim-com/prismic/types/Image";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";

export enum CarouselPhonesSliceTypeDeviceType {
  SMARTPHONE = "SMARTPHONE",
  FEATURE_PHONE = "FEATURE_PHONE",
}

export type CarouselPhonesSliceType = PrismicSliceType & {
  fields: Array<{
    carousel_phones_slice_type_caption: Array<RichTextBlock> | null;
    carousel_phones_slice_type_device_type: CarouselPhonesSliceTypeDeviceType | null;
    carousel_phones_slice_type_image: PrismicImageType | null;
  }> | null;
};
