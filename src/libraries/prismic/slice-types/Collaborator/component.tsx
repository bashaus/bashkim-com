import { Link } from "prismic-reactjs";
import React from "react";

import LinkResolver from "%prismic/helpers/LinkResolver";

import SlicePropType from "./type";

interface CollaboratorSliceTypeProps {
  slice: SlicePropType;
  peer: any;
}

const CollaboratorSliceType = ({
  slice,
  peer,
}: CollaboratorSliceTypeProps): JSX.Element => {
  const {
    CollaboratorSliceType_Company: company,
    CollaboratorSliceType_Role: role,
  } = slice.primary;

  const { peer_name: name, peer_website: website } = peer.data;

  const url = Link.url(website, LinkResolver);

  return (
    <li>
      <strong>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        )}

        {!url && <>{name}</>}
      </strong>

      {company && (
        <>
          <br />
          {company}
        </>
      )}

      <br />
      {role}
    </li>
  );
};

export default CollaboratorSliceType;
