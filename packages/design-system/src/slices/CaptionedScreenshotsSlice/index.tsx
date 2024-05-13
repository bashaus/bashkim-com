import type { CaptionedScreenshotsSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import { DeviceDesktopIcon, DeviceMobileIcon } from "@primer/octicons-react";
import { ChangeEvent, useCallback, useState } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import { CaptionedPartial } from "../../partials/CaptionedPartial";
import styles from "./styles.module.scss";

export type CaptionedScreenshotsSliceProps = {
  initialWidth?: number;
  slice: CaptionedScreenshotsSliceTypeFragment;
};

export const CaptionedScreenshotsSlice = ({
  slice,
  initialWidth = 1024,
}: CaptionedScreenshotsSliceProps) => {
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
      <RichTextFormatter>
        <PrismicRichText render={caption} />
      </RichTextFormatter>

      <div className={styles["Slider"]}>
        <span className={styles["IconMobile"]}>
          <DeviceMobileIcon size="small" aria-label="Mobile" />
        </span>

        <span className={styles["IconDesktop"]}>
          <DeviceDesktopIcon size="medium" aria-label="Desktop" />
        </span>

        <input
          className={styles["Range"]}
          type="range"
          min={0}
          step={1}
          max={fields.length - 1}
          value={selectedIndex}
          onChange={handleSizeChange}
        />
      </div>
    </CaptionedPartial>
  );
};

export default CaptionedScreenshotsSlice;
