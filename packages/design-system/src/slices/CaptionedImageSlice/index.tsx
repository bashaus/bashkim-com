import { PrismicRichText, CaptionedImageSliceType } from "@bashkim-com/prismic";

import { CaptionedPartial } from "../../partials/CaptionedPartial";

export type CaptionedImageSliceProps = {
  slice: CaptionedImageSliceType;
};

export const CaptionedImageSlice = ({
  slice,
}: CaptionedImageSliceProps): JSX.Element | null => {
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
        image &&
        image.url && (
          <img
            src={image.url}
            alt={image.alt ?? ""}
            width={image.dimensions.width}
            height={image.dimensions.height}
          />
        )
      }
    >
      <PrismicRichText render={caption} />
    </CaptionedPartial>
  );
};

export default CaptionedImageSlice;
