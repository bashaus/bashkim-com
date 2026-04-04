import RichTextFormatter from "@bashkim-com/design-system/RichTextFormatter";
import { CaptionedImageSliceTypeFragment } from "@bashkim-com/prismic-dal";

import CaptionedPartial from "../../partials/CaptionedPartial";

export type CaptionedImageSliceProps = Readonly<{
  slice: CaptionedImageSliceTypeFragment;
}>;

export default function CaptionedImageSlice({
  slice,
}: CaptionedImageSliceProps) {
  const { primary } = slice;
  if (!primary) {
    return null;
  }

  const {
    captioned_image_slice_type_caption: caption,
    captioned_image_slice_type_image: image,
  } = primary;

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
      <RichTextFormatter field={caption} />
    </CaptionedPartial>
  );
}
