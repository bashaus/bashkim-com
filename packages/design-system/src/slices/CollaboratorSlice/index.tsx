import { useLinkResolver } from "@bashkim-com/prismic-helpers";
import type {
  Case_StudyCollaboratorsCollaboratorslicetype,
  Peer,
} from "@bashkim-com/prismic-types";
import { Link } from "prismic-reactjs";

export type CollaboratorSliceProps = {
  slice: Case_StudyCollaboratorsCollaboratorslicetype;
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
