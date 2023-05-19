import type {
  CollaboratorSliceTypeFragment,
  Peer,
} from "@bashkim-com/prismic-dal";
import { useLinkResolver } from "@bashkim-com/prismic-helpers";
import { Link } from "prismic-reactjs";

export type CollaboratorSliceProps = {
  slice: CollaboratorSliceTypeFragment;
};

export const CollaboratorSlice = ({ slice }: CollaboratorSliceProps) => {
  const PrismicLinkResolver = useLinkResolver();

  if (!slice.primary) {
    return null;
  }

  const company = slice.primary.collaborator_slice_type_company;
  const role = slice.primary.collaborator_slice_type_role;
  const peer = slice.primary.collaborator_slice_type_peer as Peer;

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

        {!url && name}
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
