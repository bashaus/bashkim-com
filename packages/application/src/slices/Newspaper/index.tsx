import { RichText } from "prismic-reactjs";
import React from "react";
import { NewspaperSliceType } from "@bashkim-com/prismic";

import PartialNewspaper from "%partials/Newspaper";

import LinkResolver from "%prismic/LinkResolver";

interface NewspaperSliceProps {
  slice: NewspaperSliceType;
}

const NewspaperSlice = ({ slice }: NewspaperSliceProps): JSX.Element => (
  <PartialNewspaper>
    {slice.items.map((item, i) => {
      const { NewspaperSliceType_Group: group } = item;

      return <div key={i}>{group && RichText.render(group, LinkResolver)}</div>;
    })}
  </PartialNewspaper>
);

export default NewspaperSlice;
