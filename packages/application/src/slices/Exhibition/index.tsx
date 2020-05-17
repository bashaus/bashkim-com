import { RichText } from "prismic-reactjs";
import React from "react";
import { ExhibitionSliceType } from "@bashkim-com/prismic";

import CaseStudyLifespan from "%components/CaseStudyLifespan/index";
import LinkResolver from "%prismic/LinkResolver";

interface ExhibitionSliceProps {
  slice: ExhibitionSliceType;
}

const ExhibitionSlice = ({ slice }: ExhibitionSliceProps): JSX.Element => {
  const {
    ExhibitionSliceType_Name: name,
    // ExhibitionSliceType_Link: link,
    ExhibitionSliceType_OpeningDate: openingDate,
    ExhibitionSliceType_ClosingDate: closingDate,
    ExhibitionSliceType_Location: location,
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
