import { RichText } from "prismic-reactjs";
import React, { ChangeEvent, useState } from "react";
import { CaptionedScreenshotsSliceType } from "@bashkim-com/prismic";

import Octicon, { DeviceMobile, DeviceDesktop } from "@primer/octicons-react";
import DeferredAsset from "%components/DeferredAsset";
import PartialCaptioned from "%partials/Captioned";
import LinkResolver from "%prismic/LinkResolver";

import styles from "./styles.module.scss";

type CaptionedScreenshotsSliceProps = {
  initialWidth?: number;
  slice: CaptionedScreenshotsSliceType;
};

const CaptionedScreenshotsSlice = ({
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

  const handleSizeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedIndex(parseInt(e.currentTarget.value, 10));
  };

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
      {caption && RichText.render(caption, LinkResolver)}

      <div className={styles.slider}>
        <span className={styles.iconMobile}>
          <Octicon icon={DeviceMobile} size="small" ariaLabel="Mobile" />
        </span>

        <span className={styles.iconDesktop}>
          <Octicon icon={DeviceDesktop} size="medium" ariaLabel="Desktop" />
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
