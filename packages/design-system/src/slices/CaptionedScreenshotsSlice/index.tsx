import type { CaptionedScreenshotsSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import { useCallback, useState } from "react";

import CaptionedPartial from "../../partials/CaptionedPartial";
import * as S from "./styles";

export type CaptionedScreenshotsSliceProps = Readonly<{
  initialWidth?: number;
  slice: CaptionedScreenshotsSliceTypeFragment;
}>;

export default function CaptionedScreenshotsSlice({
  slice,
  initialWidth = 1024,
}: CaptionedScreenshotsSliceProps) {
  const fields = [...(slice.fields ?? [])];

  // Sort the elements by the width of the image
  fields.sort((a, b) => {
    const aWidth = a.captioned_screenshots_slice_type_images
      ? a.captioned_screenshots_slice_type_images.dimensions.width
      : 0;
    const bWidth = b.captioned_screenshots_slice_type_images
      ? b.captioned_screenshots_slice_type_images.dimensions.width
      : 0;

    return aWidth - bWidth;
  });

  // Find the first screenshot larger or equal to initial width
  const defaultSelectedIndex = fields.findIndex((field) => {
    if (!field.captioned_screenshots_slice_type_images) {
      return false;
    }

    return (
      field.captioned_screenshots_slice_type_images.dimensions.width >=
      initialWidth
    );
  });

  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);
  const selectedImage =
    fields[selectedIndex].captioned_screenshots_slice_type_images;

  const handleSizeChange = useCallback(
    (_event: Event, value: number | number[]): void => {
      setSelectedIndex(Array.isArray(value) ? value[0] : value);
    },
    [],
  );

  if (!slice.primary) {
    return null;
  }

  const { captioned_screenshots_slice_type_caption: caption } = slice.primary;

  return (
    <CaptionedPartial
      figure={
        selectedImage && (
          <img
            src={selectedImage.url}
            alt={selectedImage.alt ?? ""}
            width={selectedImage.dimensions.width}
            height={selectedImage.dimensions.height}
          />
        )
      }
    >
      <PrismicRichText render={caption} />

      <Stack direction="row" spacing={2} mt={4}>
        <S.MobileIcon aria-label="Mobile" />
        <S.SliderLabel>Size to resize</S.SliderLabel>
        <S.DesktopIcon aria-label="Desktop" />
      </Stack>

      <Slider
        marks
        min={0}
        step={1}
        max={fields.length - 1}
        value={selectedIndex}
        onChange={handleSizeChange}
      />
    </CaptionedPartial>
  );
}
