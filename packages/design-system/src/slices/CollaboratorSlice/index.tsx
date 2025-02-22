import type {
  CollaboratorSliceTypeFragment,
  Peer,
} from "@bashkim-com/prismic-dal";
import { useLinkResolver } from "@bashkim-com/prismic-helpers";
import MuiLink from "@mui/material/Link";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "prismic-reactjs";

export type CollaboratorSliceProps = Readonly<{
  slice: CollaboratorSliceTypeFragment;
}>;

export default function CollaboratorSlice({ slice }: CollaboratorSliceProps) {
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
    <ListItemText
      primary={
        <>
          {!url && <>{name}</>}
          {!!url && (
            <MuiLink href={url} target="_blank" rel="noreferrer">
              {name}
            </MuiLink>
          )}
        </>
      }
      secondary={
        <>
          {!!company && (
            <>
              {company}
              <br />
              {role}
            </>
          )}
          {!company && <>{role}</>}
        </>
      }
    />
  );
}
