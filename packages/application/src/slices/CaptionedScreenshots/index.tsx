import { ChangeEvent, useCallback, useState } from "react";
import { DeviceMobileIcon, DeviceDesktopIcon } from "@primer/octicons-react";

import { PartialCaptioned } from "@bashkim-com/design-system";
import {
  PrismicRichText,
  CaptionedScreenshotsSliceType,
} from "@bashkim-com/prismic";

import { DeferredAsset } from "%components/DeferredAsset";

import styles from "./styles.module.scss";

export type CaptionedScreenshotsSliceProps = {
  initialWidth?: number;
  slice: CaptionedScreenshotsSliceType;
};

export const CaptionedScreenshotsSlice = ({
  slice,
  initialWidth = 1024,
}: CaptionedScreenshotsSliceProps): JSX.Element => {
  /* non-repeat */
  const { captioned_screenshots_slice_type_caption: caption } = slice.primary;

  /* repeat */
  const fields = [...slice.fields];

  // Sort the elements by the width of the image
  fields.sort((a, b) => {
    const aWidth = a.captioned_screenshots_slice_type_images.dimensions.width;
    const bWidth = b.captioned_screenshots_slice_type_images.dimensions.width;
    return aWidth - bWidth;
  });

  // Find the first screenshot larger or equal to initial width
  const defaultSelectedIndex = fields.findIndex(
    (field) =>
      field.captioned_screenshots_slice_type_images.dimensions.width >=
      initialWidth
  );

  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);
  const selectedImage =
    fields[selectedIndex].captioned_screenshots_slice_type_images;

  const handleSizeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setSelectedIndex(+event.currentTarget.value);
    },
    []
  );

  return (
    <PartialCaptioned
      figure={
        <DeferredAsset
          width={selectedImage.dimensions.width}
          height={selectedImage.dimensions.height}
        >
          <img
            src={selectedImage.url}
            alt={selectedImage.alt || ""}
            width={selectedImage.dimensions.width}
            height={selectedImage.dimensions.height}
          />
        </DeferredAsset>
      }
    >
      <PrismicRichText render={caption} />

      <div className={styles.Slider}>
        <span className={styles.IconMobile}>
          <DeviceMobileIcon size="small" aria-label="Mobile" />
        </span>

        <span className={styles.IconDesktop}>
          <DeviceDesktopIcon size="medium" aria-label="Desktop" />
        </span>

        <input
          type="range"
          min={0}
          max={fields.length - 1}
          step={1}
          value={selectedIndex}
          onChange={handleSizeChange}
        />
      </div>
    </PartialCaptioned>
  );
};

export default CaptionedScreenshotsSlice;
