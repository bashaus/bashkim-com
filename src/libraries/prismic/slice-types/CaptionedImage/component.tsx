import { RichText } from "prismic-reactjs";
import React from "react";

import PartialCaptioned from "%components/PartialCaptioned";
import DeferredAsset from "%components/DeferredAsset";
import LinkResolver from "%prismic/helpers/LinkResolver";

import SlicePropType from "./type";

interface CaptionedImageSliceTypeProps {
  slice: SlicePropType;
}

const CaptionedImageSliceType = ({
  slice,
}: CaptionedImageSliceTypeProps): JSX.Element => {
  const {
    CaptionedImageSliceType_Caption: caption,
    CaptionedImageSliceType_Image: image,
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

export default CaptionedImageSliceType;
