import type { CaptionedImageSliceType } from "@bashkim-com/prismic";

import { DeferredImage } from "%components/DeferredImage";
import { PartialCaptioned } from "%partials/Captioned";

import { PrismicRichText } from "%prismic/helpers/RichText";

export type CaptionedImageSliceProps = {
  slice: CaptionedImageSliceType;
};

export const CaptionedImageSlice = ({
  slice,
}: CaptionedImageSliceProps): JSX.Element => {
  const {
    captioned_image_slice_type_caption: caption,
    captioned_image_slice_type_image: image,
    captioned_image_slice_type_image_blurhash: blurHash,
  } = slice.primary;

  return (
    <PartialCaptioned
      figure={
        image &&
        image.url && (
          <DeferredImage
            src={image.url}
            alt={image.alt}
            width={image.dimensions.width}
            height={image.dimensions.height}
            blurHash={blurHash}
          />
        )
      }
    >
      <PrismicRichText render={caption} />
    </PartialCaptioned>
  );
};

export default CaptionedImageSlice;
