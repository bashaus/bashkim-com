import { RichText } from 'prismic-reactjs';
import React from 'react';

import Magazine from '%components/Magazine';
import PartialCaptioned from '%components/PartialCaptioned';
import LinkResolver from '%prismic/helpers/LinkResolver';

import SlicePropType from './prop-type';

export default function CaptionedMagazineSliceType(props) {
  const { slice } = props;

  /* non-repeat */
  const {
    CaptionedMagazineSliceType_Caption: caption,
  } = slice.primary;

  /* repeat */
  const { items } = slice;
  const firstImage = items[0].CaptionedMagazineSliceType_Images;

  return (
    <PartialCaptioned
      figure={(
        <Magazine
          pageWidth={firstImage.dimensions.width}
          pageHeight={firstImage.dimensions.height}
        >
          { items.map((item) => (
            <li key={item.CaptionedMagazineSliceType_Images.url}>
              <img
                src={item.CaptionedMagazineSliceType_Images.url}
                alt={item.CaptionedMagazineSliceType_Images.alt}
                width={item.CaptionedMagazineSliceType_Images.dimensions.width}
                height={item.CaptionedMagazineSliceType_Images.dimensions.height}
              />
            </li>
          )) }
        </Magazine>
      )}
    >
      { caption && RichText.render(caption, LinkResolver) }
    </PartialCaptioned>
  );
}

CaptionedMagazineSliceType.propTypes = {
  slice: SlicePropType.isRequired,
};
