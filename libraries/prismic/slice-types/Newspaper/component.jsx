import { RichText } from 'prismic-reactjs';
import React from 'react';

import PartialNewspaper from '%components/PartialNewspaper';

import LinkResolver from '%prismic/helpers/LinkResolver';

import SlicePropType from './prop-type';

const NewspaperSliceType = ({ slice }) => (
  <PartialNewspaper>
    { slice.items.map((item, i) => {
      const {
        NewspaperSliceType_Group: group,
      } = item;

      return (
        <div key={i}>
          { group && RichText.render(group, LinkResolver) }
        </div>
      );
    }) }
  </PartialNewspaper>
);

NewspaperSliceType.propTypes = {
  slice: SlicePropType.isRequired,
};

export default NewspaperSliceType;
