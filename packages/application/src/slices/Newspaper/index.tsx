import { RichText } from "prismic-reactjs";
import React from "react";
import { NewspaperSliceType } from "@bashkim-com/prismic";

import PartialNewspaper from "%partials/Newspaper";

import LinkResolver from "%prismic/LinkResolver";

type NewspaperSliceProps = {
  slice: NewspaperSliceType;
};

const NewspaperSlice = ({ slice }: NewspaperSliceProps): JSX.Element => (
  <PartialNewspaper>
    {slice.fields.map((field, i) => {
      const { newspaper_slice_type_group: group } = field;
      return <div key={i}>{group && RichText.render(group, LinkResolver)}</div>;
    })}
  </PartialNewspaper>
);

export default NewspaperSlice;
