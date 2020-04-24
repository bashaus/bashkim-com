import { RichText } from 'prismic-reactjs';
import React from 'react';

import Octicon, { DeviceMobile, DeviceDesktop } from '@primer/octicons-react';
import DeferredAsset from '%components/DeferredAsset';
import PartialCaptioned from '%components/PartialCaptioned';
import LinkResolver from '%prismic/helpers/LinkResolver';

import SlicePropType from './prop-type';
import styles from './styles.module.scss';

const INIT_WIDTH = 1024;

const CaptionedScreenshotsSliceType = ({ slice }) => {
  /* non-repeat */
  const {
    CaptionedScreenshotsSliceType_Caption: caption,
  } = slice.primary;

  /* repeat */
  const { items } = slice;

  // Sort the elements by the width of the image
  items.sort((a, b) => {
    const aWidth = a.CaptionedScreenshotsSliceType_Images.dimensions.width;
    const bWidth = b.CaptionedScreenshotsSliceType_Images.dimensions.width;

    if (aWidth < bWidth) return -1;
    if (aWidth > bWidth) return 1;
    return 0;
  });

  // Find the first screenshot larger or equal to DEFAULT_WIDTH
  const defaultSelectedIndex = items.findIndex(
    (item) => item.CaptionedScreenshotsSliceType_Images.dimensions.width >= INIT_WIDTH,
  );

  const [selectedIndex, setSelectedIndex] = React.useState(defaultSelectedIndex);
  const selectedImage = items[selectedIndex].CaptionedScreenshotsSliceType_Images;

  return (
    <PartialCaptioned
      figure={(
        <DeferredAsset width={selectedImage.dimensions.width} height={selectedImage.dimensions.height}>
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            width={selectedImage.dimensions.width}
            height={selectedImage.dimensions.height}
          />
        </DeferredAsset>
      )}
    >
      { caption && RichText.render(caption, LinkResolver) }

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
          max={items.length - 1}
          step={1}
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(e.currentTarget.value)}
        />
      </div>
    </PartialCaptioned>
  );
};

CaptionedScreenshotsSliceType.propTypes = {
  slice: SlicePropType.isRequired,
};

export default CaptionedScreenshotsSliceType;
