import { Link } from "prismic-reactjs";
import React from "react";
import { CollaboratorSliceType } from "@bashkim-com/prismic";

import LinkResolver from "%prismic/LinkResolver";

interface CollaboratorSliceProps {
  slice: CollaboratorSliceType;
  peer: any;
}

const CollaboratorSlice = ({
  slice,
  peer,
}: CollaboratorSliceProps): JSX.Element => {
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

export default CollaboratorSlice;
