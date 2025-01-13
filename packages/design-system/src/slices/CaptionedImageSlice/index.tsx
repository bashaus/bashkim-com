import type { CaptionedImageSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";

import RichTextFormatter from "../../formatters/RichTextFormatter";
import CaptionedPartial from "../../partials/CaptionedPartial";

export type CaptionedImageSliceProps = {
  slice: CaptionedImageSliceTypeFragment;
};

export default function CaptionedImageSlice({
  slice,
}: CaptionedImageSliceProps) {
  if (!slice.primary) {
    return null;
  }

  const {
    captioned_image_slice_type_caption: caption,
    captioned_image_slice_type_image: image,
    // captioned_image_slice_type_image_blurhash: blurHash,
  } = slice.primary;

  return (
    <CaptionedPartial
      figure={
        image?.url && (
          <img
            src={image.url}
            alt={image.alt ?? ""}
            width={image.dimensions.width}
            height={image.dimensions.height}
          />
        )
      }
    >
      <RichTextFormatter>
        <PrismicRichText render={caption} />
      </RichTextFormatter>
    </CaptionedPartial>
  );
}
