import { RichText } from 'prismic-reactjs';
import React from 'react';

import PartialSubtitle from '%components/PartialSubtitle';

import LinkResolver from '%prismic/helpers/LinkResolver';

import SlicePropType from './prop-type';

export default function SubtitleSliceType(props) {
  const { slice } = props;

  const {
    SubtitleSliceType_Heading: heading,
    SubtitleSliceType_Description: description,
  } = slice.primary;

  return (
    <PartialSubtitle>
      { heading && RichText.render(heading, LinkResolver) }
      { description && RichText.render(description, LinkResolver) }
    </PartialSubtitle>
  );
}

SubtitleSliceType.propTypes = {
  slice: SlicePropType.isRequired,
};
