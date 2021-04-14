import { RichText } from "prismic-reactjs";
import type { CaptionedImageSliceType } from "@bashkim-com/prismic";

import PartialCaptioned from "%partials/Captioned";
import DeferredAsset from "%components/DeferredAsset";
import LinkResolver from "%prismic/LinkResolver";

export type CaptionedImageSliceProps = {
  slice: CaptionedImageSliceType;
};

const CaptionedImageSlice = ({
  slice,
}: CaptionedImageSliceProps): JSX.Element => {
  const {
    captioned_image_slice_type_caption: caption,
    captioned_image_slice_type_image: image,
  } = slice.primary;

  return (
    <PartialCaptioned
      figure={
        image &&
        image.url && (
          <DeferredAsset
            width={image.dimensions.width}
            height={image.dimensions.height}
          >
            <img
              src={image.url}
              alt={image.alt || ""}
              width={image.dimensions.width}
              height={image.dimensions.height}
            />
          </DeferredAsset>
        )
      }
    >
      {caption && RichText.render(caption, LinkResolver)}
    </PartialCaptioned>
  );
};

export default CaptionedImageSlice;
