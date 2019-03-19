import { RichText } from 'prismic-reactjs';
import React from 'react';

import PartialCaptioned from '%components/PartialCaptioned';
import LinkResolver from '%prismic/helpers/LinkResolver';

import SlicePropType from './prop-type';

export default function CaptionedImageSliceType(props) {
  const { slice } = props;

  const {
    CaptionedImageSliceType_Caption: caption,
    CaptionedImageSliceType_Image: image,
  } = slice.primary;

  let imageComponent = null;

  if (image && image.url) {
    imageComponent = (
      <img
        src={image.url}
        alt={image.alt || ''}
        width={image.dimensions.width}
        height={image.dimensions.height}
      />
    );
  }

  return (
    <PartialCaptioned figure={imageComponent}>
      { caption && RichText.render(caption, LinkResolver) }
    </PartialCaptioned>
  );
}

CaptionedImageSliceType.propTypes = {
  slice: SlicePropType.isRequired,
};
