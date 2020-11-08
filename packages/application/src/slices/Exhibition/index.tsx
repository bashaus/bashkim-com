import { RichText } from "prismic-reactjs";
import React from "react";
import { ExhibitionSliceType } from "@bashkim-com/prismic";

import CaseStudyLifespan from "%components/CaseStudyLifespan/index";
import LinkResolver from "%prismic/LinkResolver";

type ExhibitionSliceProps = {
  slice: ExhibitionSliceType;
};

const ExhibitionSlice = ({ slice }: ExhibitionSliceProps): JSX.Element => {
  const {
    exhibition_slice_type_name: name,
    // exhibition_slice_type_link: link,
    exhibition_slice_type_opening_date: openingDate,
    exhibition_slice_type_closing_date: closingDate,
    exhibition_slice_type_location: location,
  } = slice.primary;

  return (
    <li>
      {name && RichText.render(name, LinkResolver)}
      {location && RichText.render(location, LinkResolver)}
      <CaseStudyLifespan launched={openingDate} decommissioned={closingDate} />
    </li>
  );
};

export default ExhibitionSlice;
