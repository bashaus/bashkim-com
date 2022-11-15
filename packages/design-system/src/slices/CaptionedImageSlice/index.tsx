import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import type { Case_StudyBodyCaptionedimageslicetype } from "@bashkim-com/prismic-types";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import { CaptionedPartial } from "../../partials/CaptionedPartial";

export type CaptionedImageSliceProps = {
  slice: Case_StudyBodyCaptionedimageslicetype;
};

export const CaptionedImageSlice = ({ slice }: CaptionedImageSliceProps) => {
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
      <RichTextFormatter>
        <PrismicRichText render={caption} />
      </RichTextFormatter>
    </CaptionedPartial>
  );
};

export default CaptionedImageSlice;
