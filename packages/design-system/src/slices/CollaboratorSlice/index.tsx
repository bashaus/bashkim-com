import { useContext } from "react";
import { Link } from "prismic-reactjs";
import {
  CollaboratorSliceType,
  LinkResolverContext,
} from "@bashkim-com/prismic";

export type CollaboratorSliceProps = {
  slice: CollaboratorSliceType;
};

export const CollaboratorSlice = ({
  slice,
}: CollaboratorSliceProps): JSX.Element | null => {
  const PrismicLinkResolver = useContext(LinkResolverContext);

  if (!slice.primary) {
    return null;
  }

  const {
    collaborator_slice_type_company: company,
    collaborator_slice_type_role: role,
    collaborator_slice_type_peer: peer,
  } = slice.primary;

  if (!peer) {
    return null;
  }

  const { peer_name: name, peer_website: website } = peer;

  const url = Link.url(website, PrismicLinkResolver);

  return (
    <li>
      <strong>
        {url && (
          <a href={url} target="_blank" rel="noreferrer">
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
