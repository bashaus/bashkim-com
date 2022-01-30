import {
  CaptionedScreenshotsSliceType,
  PrismicRichText,
} from "@bashkim-com/prismic";
import { DeviceDesktopIcon, DeviceMobileIcon } from "@primer/octicons-react";
import { ChangeEvent, useCallback, useState } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import { CaptionedPartial } from "../../partials/CaptionedPartial";
import * as S from "./styles";

export type CaptionedScreenshotsSliceProps = {
  initialWidth?: number;
  slice: CaptionedScreenshotsSliceType;
};

export const CaptionedScreenshotsSlice = ({
  slice,
  initialWidth = 1024,
}: CaptionedScreenshotsSliceProps): JSX.Element | null => {
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
    (event: ChangeEvent<HTMLInputElement>): void => {
      setSelectedIndex(+event.currentTarget.value);
    },
    []
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
            alt={selectedImage.alt || ""}
            width={selectedImage.dimensions.width}
            height={selectedImage.dimensions.height}
          />
        )
      }
    >
      <RichTextFormatter>
        <PrismicRichText render={caption} />
      </RichTextFormatter>

      <S.Slider>
        <S.IconMobile>
          <DeviceMobileIcon size="small" aria-label="Mobile" />
        </S.IconMobile>

        <S.IconDesktop>
          <DeviceDesktopIcon size="medium" aria-label="Desktop" />
        </S.IconDesktop>

        <S.Range
          max={fields.length - 1}
          value={selectedIndex}
          onChange={handleSizeChange}
        />
      </S.Slider>
    </CaptionedPartial>
  );
};

export default CaptionedScreenshotsSlice;
