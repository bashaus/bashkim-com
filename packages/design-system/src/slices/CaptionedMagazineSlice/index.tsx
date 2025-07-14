import type { CaptionedMagazineSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import HTMLFlipBook from "react-pageflip";

import CaptionedPartial from "../../partials/CaptionedPartial";

export type CaptionedMagazineSliceProps = Readonly<{
  slice: CaptionedMagazineSliceTypeFragment;
}>;

export default function CaptionedMagazineSlice({
  slice,
}: CaptionedMagazineSliceProps) {
  if (!slice.fields || !slice.primary) {
    return null;
  }

  const { fields } = slice;
  const { captioned_magazine_slice_type_caption: caption } = slice.primary;

  const firstImage = fields[0].captioned_magazine_slice_type_images;

  return (
    <CaptionedPartial
      figure={
        <HTMLFlipBook
          width={firstImage.dimensions.width / 2}
          height={firstImage.dimensions.height / 2}
          className=""
          style={{}}
          startPage={0}
          size="fixed"
          minWidth={firstImage.dimensions.width / 2}
          maxWidth={firstImage.dimensions.width / 2}
          minHeight={firstImage.dimensions.height / 2}
          maxHeight={firstImage.dimensions.height / 2}
          drawShadow={true}
          flippingTime={600}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={0.3}
          showCover={true}
          mobileScrollSupport={false}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={50}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {fields.map((field) => (
            <div key={JSON.stringify(field)}>
              <div
                style={{
                  width: firstImage.dimensions.width / 2,
                  height: firstImage.dimensions.height / 2,
                }}
              >
                <img
                  src={field.captioned_magazine_slice_type_images.url}
                  alt={field.captioned_magazine_slice_type_images.alt ?? ""}
                  width={field.captioned_magazine_slice_type_images.width}
                  height={field.captioned_magazine_slice_type_images.height}
                />
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      }
    >
      <Stack spacing={2}>
        <PrismicRichText render={caption} />
        <Typography>Total pages: {fields.length}</Typography>
      </Stack>
    </CaptionedPartial>
  );
}
