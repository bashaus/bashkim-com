import { RichText } from "prismic-reactjs";
import React from "react";

import PartialNewspaper from "%components/PartialNewspaper";

import LinkResolver from "%prismic/helpers/LinkResolver";

import SlicePropType from "./type";

interface NewspaperSliceTypeProps {
  slice: SlicePropType;
}

const NewspaperSliceType = ({
  slice,
}: NewspaperSliceTypeProps): JSX.Element => (
  <PartialNewspaper>
    {slice.items.map((item, i) => {
      const { NewspaperSliceType_Group: group } = item;

      return <div key={i}>{group && RichText.render(group, LinkResolver)}</div>;
    })}
  </PartialNewspaper>
);

export default NewspaperSliceType;
