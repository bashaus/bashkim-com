import { RichText } from 'prismic-reactjs';

import React from 'react';
import CaseStudyLifespan from '%components/CaseStudyLifespan/index';
import LinkResolver from '%prismic/helpers/LinkResolver';

import SlicePropType from './prop-type';

const ExhibitionSliceType = ({ slice }) => {
  const {
    ExhibitionSliceType_Name: name,
    // ExhibitionSliceType_Link: link,
    ExhibitionSliceType_OpeningDate: openingDate,
    ExhibitionSliceType_ClosingDate: closingDate,
    ExhibitionSliceType_Location: location,
  } = slice.primary;

  return (
    <li>
      { name && RichText.render(name, LinkResolver) }
      { location && RichText.render(location, LinkResolver) }
      <CaseStudyLifespan
        launched={openingDate}
        decommissioned={closingDate}
      />
    </li>
  );
};

ExhibitionSliceType.propTypes = {
  slice: SlicePropType.isRequired,
};

export default ExhibitionSliceType;
