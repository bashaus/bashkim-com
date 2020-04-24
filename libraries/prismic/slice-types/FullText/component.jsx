import { RichText } from 'prismic-reactjs';
import React from 'react';

import LinkResolver from '%prismic/helpers/LinkResolver';

import PartialFullText from '%components/PartialFullText';

import SlicePropType from './prop-type';

const FullTextSliceType = ({ slice }) => {
  const {
    FullTextSliceType_Body: body,
  } = slice.primary;

  return (
    <PartialFullText>
      { body && RichText.render(body, LinkResolver) }
    </PartialFullText>
  );
};

FullTextSliceType.propTypes = {
  slice: SlicePropType.isRequired,
};

export default FullTextSliceType;
