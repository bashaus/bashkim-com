import { RichText } from 'prismic-reactjs';
import React from 'react';

import PartialSubtitle from '%components/PartialSubtitle';

import LinkResolver from '%prismic/helpers/LinkResolver';

import SlicePropType from './type';

interface SubtitleSliceTypeProps {
  slice: SlicePropType;
}

const SubtitleSliceType = ({ slice }: SubtitleSliceTypeProps): JSX.Element => {
  const {
    SubtitleSliceType_Heading: heading,
    SubtitleSliceType_Description: description,
  } = slice.primary;

  return (
    <PartialSubtitle>
      {heading && RichText.render(heading, LinkResolver)}
      {description && RichText.render(description, LinkResolver)}
    </PartialSubtitle>
  );
};

export default SubtitleSliceType;
