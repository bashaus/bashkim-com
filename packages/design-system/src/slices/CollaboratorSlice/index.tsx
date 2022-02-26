import {
  CollaboratorSliceType,
  LinkResolverContext,
} from "@bashkim-com/prismic";
import { Link } from "prismic-reactjs";
import { useContext } from "react";

export type CollaboratorSliceProps = {
  slice: CollaboratorSliceType;
};

export const CollaboratorSlice = ({ slice }: CollaboratorSliceProps) => {
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
    <>
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
    </>
  );
};
